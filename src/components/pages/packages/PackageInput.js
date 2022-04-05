import { Button, FormHelperText, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PackageInput = ({ state, setState, onSubmit }) => {

    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    return <div className="" >
        <form className='space-y-4' onSubmit={onSubmit}>
            <TextFieldSimple label="Name of package" name="name" value={state.name} onChange={onChange} />
            <TextFieldSimple label="Number of Subject" name="subject" value={state.subject} onChange={onChange} />
            <TextFieldSimple label="Number of Day/Week" name="days" value={state.days} onChange={onChange} />
            <div>
                <TextFieldSimple label="Amount" name="amount" value={state.amount} onChange={onChange} />
                <FormHelperText>Amount in RM or % (For discount)</FormHelperText>
            </div>

            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>

            <Button variant="contained" fullWidth type="submit">Save</Button>
        </form>
    </div>;
};

export default PackageInput;
