import { Button } from '@mui/material'
import React from 'react'
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
    return (
        <div className='content'>
            <TabsSection tabs={tabs} active={tabs[0][0]} />
            <div className="mt-7 grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <div className="text-lg font-medium">Student List</div>
                    <div className="mt-5">
                        <StudentList />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="text-lg font-medium">Inventory To Issue</div>
                    <div className="mt-5">
                        <InventoryTable />
                    </div>
                    <div className="mt-5 float-right">
                        <Button variant="contained">Issue</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Issue2Student