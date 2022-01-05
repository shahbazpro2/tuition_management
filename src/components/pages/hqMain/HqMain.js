import React from 'react'
import { url_center } from '../../functions/pageUrls'
import HqCard from './HqCard'

const HqMain = () => {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <HqCard title="Center Management" link={url_center} />
                <HqCard title="Course Management" />
                <HqCard title="KPI Settings" />
                <HqCard title="Reports" />
                <HqCard title="Package Management" />
                <HqCard title="Inventories Management" />
                <HqCard title="Billing Center" />
                <HqCard title="Settings" />
            </div>
        </div>
    )
}

export default HqMain
