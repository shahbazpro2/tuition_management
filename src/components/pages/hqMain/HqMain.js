import React from 'react'
import ImageCard from '../../common/ImageCard'
import { url_attendence, url_centerKpi, url_centers, url_courses, url_enquires, url_inventories, url_issue2Student, url_packages, url_payByStudent, url_payHq, url_report, url_settings, url_studentInvoicing, url_students } from 'utils/pageUrls'

const HqMain = () => {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <ImageCard title="Centers" image="CentreManagement.png" link={url_centers} />
                <ImageCard title="Courses" image="Course.png" link={url_courses} />
                <ImageCard title="Center's KPI" image="KPI.png" width={60} link={url_centerKpi} />
                <ImageCard title="Packages" image="PackageManagement.png" link={url_packages} />
                <ImageCard title="Inventories" image="Inventories.png" link={url_inventories} />
                <ImageCard title="Invoice/Billing" image="BillingReceipt.png" link={url_studentInvoicing} />
                <ImageCard title="Students" image="StudentsManagement.png" width={70} link={url_students} />
                <ImageCard title="Attendence" image="Attendance.png" link={url_attendence} />
                <ImageCard title="Pay HQ" image="Payment.png" link={url_payHq} />
                <ImageCard title="Report" image="Report.png" link={url_report} />
                <ImageCard title="Issue & Request Inventory" image="IssuanceToStudents.png" link={url_issue2Student} />
                <ImageCard title="Received Payment From Student" image="Received.png" link={url_payByStudent} />
                <ImageCard title="Enquires" image="Enquiries.png" link={url_enquires} />
                <ImageCard title="Settings" image="Settings.png" link={url_settings} />
            </div>
        </div>
    )
}

export default HqMain
