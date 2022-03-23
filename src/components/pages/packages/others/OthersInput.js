import { Button, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';

const DiscountInput = ({ state, setState, onSubmit }) => {

    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    return <div className="" >
        <form className='space-y-4' onSubmit={onSubmit}>

            <TextFieldSimple
                label="Others Description"
                multiline
                rows={3}
                name="description"
                value={state.description}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Other Percentage"
                name="discount"
                value={state.discount}
                onChange={onChange}
            />
            <SelectField label="Status" name="status"
                value={state.status}
                onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>

            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>;
};

export default DiscountInput;
