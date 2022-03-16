import { Button, MenuItem, styled } from '@mui/material';
import React, { useContext, useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalLayout from '../../common/Modal';
import TypeModal from './TypeModal';
import LanguageModal from './LanguageModal';
import { GlobalContext } from 'context/GlobalContext';
const Input = styled('input')({
    display: 'none',
});
const CourseInput = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    const [typeModal, setTypeModal] = useState(false)
    const [languageModal, setLanguageModal] = useState(false)

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    console.log('conte', context, state)
    return <div className="">
        <form className='space-y-4' onSubmit={onSubmit}>
            <div className="flex space-x-3 items-center">
                <SelectField label="Type" name="type" value={state.type} onChange={onChange}>
                    <MenuItem value="">Select type</MenuItem>
                    {context.enums?.courseType?.map(item => (
                        <MenuItem key={item.name} value={item._id}>{item.name}</MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setTypeModal(true)} />
                <ModalLayout title="Type Details" open={typeModal} setOpen={() => setTypeModal(false)}>
                    <TypeModal setTypeModal={setTypeModal} />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Language" name="language" value={state.language} onChange={onChange}>
                    <MenuItem value="">Select language</MenuItem>
                    {context.enums?.courseLanguage?.map(item => (
                        <MenuItem key={item.name} value={item._id}>{item.name}</MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setLanguageModal(true)} />
                <ModalLayout title="Language Details" open={languageModal} setOpen={() => setLanguageModal(false)}>
                    <LanguageModal setLanguageModal={setLanguageModal} />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Description"
                name="description"
                value={state.description}
                onChange={onChange}
                multiline
                rows={3}
            />
            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
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
            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>;
};

export default CourseInput;
