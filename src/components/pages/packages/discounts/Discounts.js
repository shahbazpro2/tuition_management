import React from 'react';
import { url_addDiscount } from '../../../functions/pageUrls';
import TopSection from '../common/TopSection';
import DiscountsList from './DiscountsList';

const Discounts = () => {
    return <div className='my-7'>
        <TopSection title="Add Discount" url={url_addDiscount} active="discounts" />
        <div className="mt-10">
            <DiscountsList />
        </div>
    </div>;
};

export default Discounts;
