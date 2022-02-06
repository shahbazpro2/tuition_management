import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Add from '../../../common/Add';
import { url_dicounts, url_packageOthers, url_packages } from '../../../functions/pageUrls';

const TopSection = ({ title, url, active }) => {
    const navigate = useNavigate()

    return <div className="grid grid-cols-4">
        <div className="col-span-1">
            <div className="flex items-center h-full">
                <Add title={title} link={url} />
            </div>
        </div>
        <div className="col-span-3">
            <div className="flex space-x-5">
                <div className="text-lg">Type</div>
                <Button variant={`${active === 'packages' ? 'contained' : 'outlined'}`} onClick={() => navigate(url_packages)}>Packages</Button>
                <Button variant={`${active === 'discounts' ? 'contained' : 'outlined'}`} onClick={() => navigate(url_dicounts)}>Discounts</Button>
                <Button variant={`${active === 'others' ? 'contained' : 'outlined'}`} onClick={() => navigate(url_packageOthers)}>Others</Button>
            </div>
        </div>
    </div>
};

export default TopSection;
