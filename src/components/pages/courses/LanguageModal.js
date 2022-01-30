import { Button } from '@mui/material';
import React from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const LanguageModal = () => {
    return <div className="space-y-5">
        <TextFieldSimple label="Language Name" />

        <Button variant="contained">Save</Button>
    </div>
};

export default LanguageModal;
