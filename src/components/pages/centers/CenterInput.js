import { Button } from '@mui/material';
import React from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const CenterInput = () => {
    return <div className="">
        <form className='space-y-3'>
            <TextFieldSimple
                label="Name"
            />
            <TextFieldSimple
                label="Address"
            />
            <TextFieldSimple
                label="Business Reg Number"
            />
            <TextFieldSimple
                label="Center Office Number"
            />
            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default CenterInput;
