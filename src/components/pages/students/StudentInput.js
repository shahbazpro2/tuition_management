import { Button, Checkbox, FormControlLabel, MenuItem } from '@mui/material';
import React from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const StudentInput = () => {

    return <div className="">
        <form className='space-y-4'>
            <TextFieldSimple
                label="Name"
            />
            <SelectField label="Gender">
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
            </SelectField>
            <SelectField label="Religion">
                <MenuItem value="muslim">Muslim</MenuItem>
                <MenuItem value="hindu">Hindu</MenuItem>
            </SelectField>
            <TextFieldSimple
                label="Address"
                multiline
                rows={3}
            />
            <TextFieldSimple
                label="Contact Number"
            />
            <TextFieldSimple
                label="Emergency Contact Number"
            />

            <TextFieldSimple
                label="Father Name"
            />
            <TextFieldSimple
                label="Mother Name"
            />
            <SelectField label="Select Package">
            </SelectField>

            <div>
                <div className="text-base">Health Condition</div>
                <div className="flex">
                    <FormControlLabel control={<Checkbox />} label="Yes" />
                    <FormControlLabel control={<Checkbox />} label="No" />
                </div>
            </div>
            <div>
                <div className="text-base">Prefered Language</div>
                <div className="grid grid-cols-2">
                    <FormControlLabel control={<Checkbox />} label="English" />
                    <FormControlLabel control={<Checkbox />} label="Malay" />
                    <FormControlLabel control={<Checkbox />} label="Chinese (Mandarian)" />
                    <FormControlLabel control={<Checkbox />} label="Chinese (Cantonese)" />
                </div>
            </div>

            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default StudentInput;
