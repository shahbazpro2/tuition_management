import React from 'react';
import CenterInput from './CenterInput';

const AddCenter = () => {
    return <div className='mt-10'>
        <div className="text-2xl text-center font-bold">Add Center</div>
        <div className="mt-10">
            <div className="grid grid-cols-6">
                <div className="col-start-3 col-span-2">
                    <CenterInput />
                </div>
            </div>
        </div>
    </div>;
};

export default AddCenter;
