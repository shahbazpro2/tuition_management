import { Button, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';

const DiscountInput = () => {
    return <div className="">
        <form className='space-y-4'>

            <TextFieldSimple
                label="Discount Description"
                multiline
                rows={3}
            />
            <TextFieldSimple
                label="Discount Percentage"
            />
            <SelectField label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>

            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default DiscountInput;
