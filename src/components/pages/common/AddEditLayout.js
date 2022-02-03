import React, { Children } from 'react';

const AddEditLayout = ({ children, title }) => {
    return <div className='my-10'>
        <div className="text-2xl text-center font-bold">{title}</div>
        <div className="mt-10">
            <div className="grid grid-cols-6">
                <div className="col-start-3 col-span-2">
                    {children}
                </div>
            </div>
        </div>
    </div>;
};

export default AddEditLayout;
