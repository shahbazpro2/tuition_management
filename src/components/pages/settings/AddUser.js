import React from 'react'
import AddEditLayout from '../common/AddEditLayout'
import UserInput from './UserInput'

const AddUser = () => {
    return (
        <AddEditLayout title="Add User">
            <UserInput />
        </AddEditLayout>
    )
}

export default AddUser