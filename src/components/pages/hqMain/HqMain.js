import React from 'react'
import ImageCard from '../../common/ImageCard'
import { url_attendence, url_centers, url_course } from '../../functions/pageUrls'

const HqMain = () => {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <ImageCard title="Centers" image="CentreManagement.png" link={url_centers} />
                <ImageCard title="Courses" image="Course.png" link={url_course} />
                <ImageCard title="Center's KPI" image="KPI.png" width={60} />
                <ImageCard title="Packages" image="PackageManagement.png" />
                <ImageCard title="Inventories" image="Inventories.png" />
                <ImageCard title="Invoice/Billing" image="BillingReceipt.png" />
                <ImageCard title="Student" image="StudentsManagement.png" width={70} />
                <ImageCard title="Attendence" image="Attendance.png" link={url_attendence} />
                <ImageCard title="Pay HQ" image="Payment.png" />
                <ImageCard title="Report" image="Report.png" />
                <ImageCard title="Issue & Request Inventory" image="IssuanceToStudents.png" />
                <ImageCard title="Received Payment From Student" image="Received.png" />
                <ImageCard title="Enquires" image="Enquiries.png" />
                <ImageCard title="Settings" image="Settings.png" />
            </div>
        </div>
    )
}

export default HqMain
