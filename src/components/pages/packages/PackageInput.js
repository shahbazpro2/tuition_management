import { Button, FormHelperText, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PackageInput = () => {
    return <div className="">
        <form className='space-y-4'>

            <SelectField label="Number of Subject">
            </SelectField>

            <SelectField label="Number of Day/Week">
            </SelectField>
            <div>
                <TextFieldSimple label="Amount" />
                <FormHelperText>Amount in RM or % (For discount)</FormHelperText>
            </div>

            <SelectField label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>

            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default PackageInput;
