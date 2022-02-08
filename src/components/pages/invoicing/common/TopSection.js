import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { url_centerInvoicing, url_studentInvoicing } from '../../../functions/pageUrls';

const TopSection = ({ active }) => {
    const navigate = useNavigate()
    return <div className="flex space-x-5">
        <div className="text-lg">Type</div>
        <Button variant={`${active === 'student' ? 'contained' : 'outlined'}`} onClick={() => navigate(url_studentInvoicing)}>Student</Button>
        <Button variant={`${active === 'center' ? 'contained' : 'outlined'}`} onClick={() => navigate(url_centerInvoicing)}>Center</Button>
    </div>
};

export default TopSection;
