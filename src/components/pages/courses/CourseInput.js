import { Button, MenuItem, styled } from '@mui/material';
import React, { useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalLayout from '../../common/Modal';
import TypeModal from './TypeModal';
import LanguageModal from './LanguageModal';
const Input = styled('input')({
    display: 'none',
});
const CourseInput = () => {
    const [typeModal, setTypeModal] = useState(false)
    const [languageModal, setLanguageModal] = useState(false)

    return <div className="">
        <form className='space-y-4'>
            <div className="flex space-x-3 items-center">
                <SelectField label="Type">
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setTypeModal(true)} />
                <ModalLayout title="Type Details" open={typeModal} setOpen={() => setTypeModal(false)}>
                    <TypeModal />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Language">
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setLanguageModal(true)} />
                <ModalLayout title="Language Details" open={languageModal} setOpen={() => setLanguageModal(false)}>
                    <LanguageModal />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Description"
                multiline
                rows={3}
            />
            <SelectField label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            <div>
                <label htmlFor="contained-button-file">
                    <Input id="contained-button-file" multiple type="file" />
                    <Button variant="contained" color="secondary" component="span">
                        Upload
                    </Button>
                </label>
            </div>
            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default CourseInput;
