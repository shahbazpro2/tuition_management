import React, { Children } from 'react';

const AddEditLayout = ({ children, title }) => {
    return <div className='content'>
        <div className="text-2xl dark:text-white text-center font-bold">{title}</div>
        <div className="mt-7">
            <div className="grid grid-cols-7">
                <div className="col-start-3 col-span-3">
                    {children}
                </div>
            </div>
        </div>
    </div>;
};

export default AddEditLayout;
