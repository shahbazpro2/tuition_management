import { Button, MenuItem, styled } from '@mui/material';
import React, { useContext, useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalLayout from '../../common/Modal';
import TypeModal from './TypeModal';
import LanguageModal from './LanguageModal';
import { GlobalContext } from 'context/GlobalContext';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import { deleteCourseLanguageApi, deleteCourseTypeApi } from 'api/enums';
const Input = styled('input')({
    display: 'none',
});
const CourseInput = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    const [typeModal, setTypeModal] = useState(false)
    const [languageModal, setLanguageModal] = useState(false)
    const [deleteApi] = useApi({ successMsg: true, errMsg: true })

    const [getEnums] = useRefetchEnums()

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onRemoveCourseType = (e, id) => {
        e.stopPropagation()
        deleteApi(deleteCourseTypeApi(id), () => {
            getEnums()
        })
    }

    const onRemoveLanguage = (e, id) => {
        e.stopPropagation()
        deleteApi(deleteCourseLanguageApi(id), () => {
            getEnums()
        })
    }

    return <div className="">
        <form className='space-y-4' onSubmit={onSubmit}>
            <div className="flex space-x-3 items-center">
                <SelectField label="Type" name="type" value={state.type} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return context.enums?.courseType?.find(x => x._id === selected)?.name || 'Select type'
                    }
                }}>
                    <MenuItem value="">Select type</MenuItem>
                    {context.enums?.courseType?.map(item => (
                        <MenuItem key={item.name} value={item._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{item.name}</div>
                                <Button onClick={(e) => onRemoveCourseType(e, item._id)}>Remove</Button>
                            </div>
                        </MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setTypeModal(true)} />
                <ModalLayout title="Type Details" open={typeModal} setOpen={() => setTypeModal(false)}>
                    <TypeModal setTypeModal={setTypeModal} />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Language" name="language" value={state.language} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return context.enums?.courseLanguage?.find(x => x._id === selected)?.name || 'Select type'
                    }
                }}>
                    <MenuItem value="">Select language</MenuItem>
                    {context.enums?.courseLanguage?.map(item => (
                        <MenuItem key={item.name} value={item._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{item.name}</div>
                                <Button onClick={(e) => onRemoveLanguage(e, item._id)}>Remove</Button>
                            </div>
                        </MenuItem>
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
            <SelectField label="Teacher" required={false} name="teacher" value={state.teacher} onChange={onChange}>
                <MenuItem value="">Select a teacher</MenuItem>
                {context.enums?.teachers?.map(item => (
                    <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                ))}
            </SelectField>
            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            {/* <div>
                <label htmlFor="contained-button-file">
                    <Input id="contained-button-file" multiple type="file" />
                    <Button variant="contained" color="secondary" component="span">
                        Upload
                    </Button>
                </label>
            </div> */}
            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>;
};

export default CourseInput;
