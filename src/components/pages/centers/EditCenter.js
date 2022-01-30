import React from 'react';
import CenterInput from './CenterInput';

const EditCenter = () => {
    return <div className='my-10'>
        <div className="text-2xl text-center font-bold">Edit Center</div>
        <div className="mt-10">
            <div className="grid grid-cols-6">
                <div className="col-start-3 col-span-2">
                    <CenterInput />
                </div>
            </div>
        </div>
    </div>;
};

export default EditCenter;
