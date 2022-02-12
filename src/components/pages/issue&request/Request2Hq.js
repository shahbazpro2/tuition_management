import { Button } from '@mui/material'
import React from 'react'
import SelectField from '../../common/textFields/SelectField'
import TabsSection from '../common/TabsSection'
import InventoryTable from './common/InventoryTable'
import { tabs } from './issue2Student/Issue2Student'

const Request2Hq = () => {
    return (
        <div className="content">
            <TabsSection tabs={tabs} active={tabs[1][0]} />
            <div className="mt-7 w-[500px]">
                <SelectField label="Center">
                </SelectField>
            </div>
            <div className="text-lg font-medium mt-5">
                Inventory To Request
            </div>
            <div className="mt-3">
                <InventoryTable />
            </div>
            <div className="mt-7 float-right mb-10">
                <Button variant="contained">Request</Button>
            </div>
        </div>
    )
}

export default Request2Hq