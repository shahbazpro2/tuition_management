import { Button } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const TabsSection = ({ tabs, active }) => {
    const navigate = useNavigate()
    return <div className="flex space-x-5">
        <div className="text-lg">Type</div>
        {tabs?.map(([title, link]) => (
            <Fragment key={title}>
                <Button variant={`${title === active ? 'contained' : 'outlined'}`} onClick={() => navigate(link)}>{title}</Button>
            </Fragment>
        ))}
    </div>
};

export default TabsSection;
