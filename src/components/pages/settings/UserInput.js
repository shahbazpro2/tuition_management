import { Button, MenuItem } from '@mui/material'
import React from 'react'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'

const UserInput = ({ state, setState, onSubmit }) => {

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <form className='space-y-4' onSubmit={onSubmit}>
            <TextFieldSimple
                label="Name"
                required
                name="name"
                value={state.name}
                onChange={onChangeInput}
            />
            <TextFieldSimple
                label="Email"
                type="email"
                value={state.email}
                required
                name="email"
                onChange={onChangeInput}
            />
            <TextFieldSimple
                label="Password"
                type="password"
                required
                name="password"
                value={state.password}
                onChange={onChangeInput}
            />
            <SelectField label="Role" name="role" value={state.role} onChange={onChangeInput} required>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="hq">Hq</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
            </SelectField>
            <Button type="submit" variant="contained" fullWidth>Create</Button>
        </form>
    )
}

export default UserInput