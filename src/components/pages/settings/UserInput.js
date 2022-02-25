import { Button, MenuItem } from '@mui/material'
import React from 'react'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'

const UserInput = () => {
    return (
        <form className='space-y-4'>
            <TextFieldSimple
                label="Name"
                required={true}
            />
            <TextFieldSimple
                label="Email"
                type="email"
                required={true}
            />
            <SelectField label="Role" required={true}>
                <MenuItem>Admin</MenuItem>
                <MenuItem>Hq</MenuItem>
                <MenuItem>Teacher</MenuItem>
            </SelectField>
            <Button variant="contained" fullWidth>Create</Button>
        </form>
    )
}

export default UserInput