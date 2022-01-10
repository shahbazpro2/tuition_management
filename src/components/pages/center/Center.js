import React from 'react'
import CenterCard from './CenterCard'
import { url_attendence, url_student } from '../../functions/pageUrls';

const Center = () => {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CenterCard title="Student" image='StudentsManagement.png' link={url_student} width={80} />
                <CenterCard title="Course" image='Course.png' />
                <CenterCard title="Attendence" image='Attendance.png' link={url_attendence} />
                <CenterCard title="Request HQ" image="RequestHq.png" />
                <CenterCard title="Student Pay" image="Payment.png" />
                <CenterCard title="Pay HQ" image="Received.png" />
                <CenterCard title="Report" image="Report.png" />
                <CenterCard title="Help Support" image="HelpSupport.png" width={48} />
                <CenterCard title="User Settings" image="Settings.png" />
                <CenterCard title="Enquiry" image="Enquiries.png" />
                <CenterCard title="Issue To Student" image="IssuanceToStudents.png" width={48} />
            </div>
        </div>
    )
}

export default Center
