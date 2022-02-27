import React from 'react';
import { url_packageAddOthers } from 'utils/pageUrls';
import TopSection from '../common/TopSection';
import OthersList from './OthersList';

const Others = () => {
    return <div className="content">
        <TopSection title="Add Other Package" url={url_packageAddOthers} active="others" />
        <div className="mt-10">
            <OthersList />
        </div>
    </div>;
};

export default Others
