import { Button, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';

const OthersInput = () => {
    return <div className="">
        <form className='space-y-4'>

            <TextFieldSimple
                label="Description"
                multiline
                rows={3}
            />
            <TextFieldSimple
                label="Amount"
            />
            <SelectField label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>

            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default OthersInput;
