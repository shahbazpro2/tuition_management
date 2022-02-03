import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import PackageInput from './PackageInput';

const EditPackage = () => {
    return <AddEditLayout title="Edit Package">
        <PackageInput />
    </AddEditLayout>
};

export default EditPackage;
