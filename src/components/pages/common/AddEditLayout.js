import React, { Children } from 'react';

const AddEditLayout = ({ children, title }) => {
    return <div className='my-7'>
        <div className="text-2xl text-center font-bold">{title}</div>
        <div className="mt-7">
            <div className="grid grid-cols-6">
                <div className="col-start-3 col-span-2">
                    {children}
                </div>
            </div>
        </div>
    </div>;
};

export default AddEditLayout;
