import React from 'react';
import { url_addPackage } from 'utils/pageUrls';
import TopSection from './common/TopSection';
import PackagesList from './PackagesList';

const Packages = () => {

    return <div className='content'>
        <TopSection title="Add Package" url={url_addPackage} active="packages" />
        <div className="mt-10">
            <PackagesList />
        </div>
    </div>
};

export default Packages;
