import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import PackageInput from './PackageInput';

const AddPackage = () => {
    return <AddEditLayout title="Add Package">
        <PackageInput />
    </AddEditLayout>
};

export default AddPackage;
