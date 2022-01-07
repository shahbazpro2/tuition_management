import React from 'react'
import CenterCard from './CenterCard'
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { url_student } from '../../functions/pageUrls';

const Center = () => {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CenterCard title="Student" image='StudentsManagement.png' link={url_student} width={80} />
                <CenterCard title="Course" image='Course.png' />
                <CenterCard title="Attendence" image='Attendance.png' />
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
