import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Add from '../../common/Add';
import { url_addPackage, url_dicounts, url_packages } from '../../functions/pageUrls';
import TopSection from './common/TopSection';
import PackagesList from './PackagesList';

const Packages = () => {
    const navigate = useNavigate()

    return <div className='my-7'>
        <TopSection title="Add Package" url={url_addPackage} active="packages" />
        <div className="mt-10">
            <PackagesList />
        </div>
    </div>
};

export default Packages;
