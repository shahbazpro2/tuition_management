import { Button } from '@mui/material'
import { createStudentIssueApi, getStudentIssueApi } from 'api/studentIssue'
import { FeedbackContext } from 'context/FeedbackContext'
import React, { useContext, useEffect, useState } from 'react'
import useApi from 'utils/hooks/useApi'
import { url_issue2Student, url_request2Hq } from 'utils/pageUrls'
import TabsSection from '../../common/TabsSection'
import InventoryTable from '../common/InventoryTable'
import InventoryToIssue from '../common/InventoryTable'
import StudentList from './StudentList'

export const tabs = [
    ["Issue to Student", url_issue2Student],
    ["Request HQ", url_request2Hq]
]

const Issue2Student = () => {
    const [selectStudent, setSelectStudent] = useState()
    const [selectInventories, setSelectInventories] = useState([])
    const context = useContext(FeedbackContext)
    const [createUpdate] = useApi({ successMsg: true, errMsg: true })
    const [getIssued] = useApi({ errMsg: true })

    useEffect(() => {
        if (selectStudent) {
            getIssued(getStudentIssueApi(selectStudent), ({ data }) => {
                setSelectInventories(data?.inventories)
            })
        }
    }, [selectStudent])

    const onSubmit = () => {
        if (!selectStudent) {
            return context.setFeedback('Please select a student', true)
        }

        createUpdate(createStudentIssueApi({ studentId: selectStudent, inventories: selectInventories }))
    }


    return (
        <div className='content'>
            <TabsSection tabs={tabs} active={tabs[0][0]} />
            <div className="mt-7 grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <div className="text-lg font-medium">Student List</div>
                    <div className="mt-5">
                        <StudentList selectStudent={selectStudent} setSelectStudent={setSelectStudent} />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="text-lg font-medium">Inventory To Issue</div>
                    <div className="mt-5">
                        <InventoryTable selectInventories={selectInventories} setSelectInventories={setSelectInventories} />
                    </div>
                    <div className="mt-5 float-right">
                        <Button variant="contained" onClick={onSubmit}>Issue</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Issue2Student