import React from 'react';
import Add from '../../common/Add';
import { url_addInventory } from 'utils/pageUrls';
import InventoriesList from './InventoriesList';
const Inventories = () => {
    return <div className='content'>
        <Add title="Add Inventory" link={url_addInventory} />
        <div className="mt-7">
            <InventoriesList />
        </div>
    </div>;
};

export default Inventories;
