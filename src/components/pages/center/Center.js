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
                <CenterCard title="Student" icon={<PeopleIcon fontSize='inherit' />} link={url_student} />
                <CenterCard title="Course" icon={<MenuBookIcon fontSize='inherit' />} />
                <CenterCard title="Attendence" icon={<FactCheckIcon fontSize='inherit' />} />
                <CenterCard title="Request HQ" icon={<LocalShippingIcon fontSize='inherit' />} />
                <CenterCard title="Student Pay" icon={<LocalAtmIcon fontSize='inherit' />} />
                <CenterCard title="Pay HQ" icon={<LocalAtmIcon fontSize='inherit' />} />
                <CenterCard title="Report" icon={<AssessmentIcon fontSize='inherit' />} />
                <CenterCard title="Help Support" icon={<SupportAgentIcon fontSize='inherit' />} />
                <CenterCard title="User Settings" icon={<SettingsIcon fontSize='inherit' />} />
                <CenterCard title="Enquiry" icon={<EmailIcon fontSize='inherit' />} />
                <CenterCard title="Issue To Student" icon={<LocalLibraryIcon fontSize='inherit' />} />
            </div>
        </div>
    )
}

export default Center
