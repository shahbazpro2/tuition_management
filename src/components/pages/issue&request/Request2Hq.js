import { Button, MenuItem } from '@mui/material'
import { getCentersApi } from 'api/center'
import { createRequestHqApi, getRequestHqApi } from 'api/requestHq'
import { FeedbackContext } from 'context/FeedbackContext'
import React, { useContext, useEffect, useState } from 'react'
import useApi from 'utils/hooks/useApi'
import SelectField from '../../common/textFields/SelectField'
import TabsSection from '../common/TabsSection'
import InventoryTable from './common/InventoryTable'
import { tabs } from './issue2Student/Issue2Student'

const Request2Hq = () => {
    const [, { data }] = useApi({}, getCentersApi)
    const context = useContext(FeedbackContext)
    const [selectCenter, setSelectCenter] = useState()
    const [selectInventories, setSelectInventories] = useState([])
    const [createUpdate] = useApi({ successMsg: true, errMsg: true })
    const [getRequest] = useApi({ errMsg: true })

    useEffect(() => {
        if (selectCenter) {
            getRequest(getRequestHqApi(selectCenter), ({ data }) => {
                setSelectInventories(data?.inventories)
            })
        }
    }, [selectCenter])

    const onSubmit = () => {
        if (!selectCenter) {
            return context.setFeedback('Please select a center', true)
        }

        if (!selectInventories.length) {
            return context.setFeedback('Please select at least one inventory', true)
        }

        createUpdate(createRequestHqApi({ centerId: selectCenter, inventories: selectInventories }))
    }



    return (
        <div className="content">
            <TabsSection tabs={tabs} active={tabs[1][0]} />
            <div className="mt-7 w-[500px]">
                <SelectField value={selectCenter} label="Center" onChange={e => setSelectCenter(e.target.value)}>
                    <MenuItem value="">Select Center</MenuItem>
                    {data?.map(item => (
                        <MenuItem key={item?._id} value={item?._id}>{item?.name}</MenuItem>
                    ))}

                </SelectField>
            </div>
            <div className="text-lg font-medium mt-5">
                Inventory To Request
            </div>
            <div className="mt-3">
                <InventoryTable selectInventories={selectInventories} setSelectInventories={setSelectInventories} />
            </div>
            <div className="mt-7 float-right mb-10">
                <Button variant="contained" onClick={onSubmit}>Request</Button>
            </div>
        </div>
    )
}

export default Request2Hq