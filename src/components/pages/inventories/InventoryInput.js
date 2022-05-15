import { Button, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalLayout from '../../common/Modal';
import CategoryModal from './CategoryModal';
import useApi from 'utils/hooks/useApi'
import { enumsApi } from 'api/enums';
import { GlobalContext } from 'context/GlobalContext';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import { deleteInventoryCategoryApi } from 'api/inventory';


const InventoryInput = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    const [picModal, setPicModal] = useState(false)
    const [deleteApi] = useApi({ successMsg: true, errMsg: true })
    const [getEnums] = useRefetchEnums()


    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }


    const onRemoveCategory = (e, id) => {
        e.stopPropagation()
        deleteApi(deleteInventoryCategoryApi(id), () => {
            getEnums()
        })
    }

    const { inventoryCategory } = context.enums

    return <div className="">
        <form className='space-y-4' onSubmit={onSubmit}>
            <TextFieldSimple
                label="Name"
                name="name"
                value={state.name}
                onChange={onChange}
            />
            <div className="flex space-x-3 items-center">
                <SelectField label="Category" name="category" value={state.category} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return inventoryCategory?.find(x => x._id === selected)?.name || 'Select category'
                    }
                }}>
                    <MenuItem value="">Select language</MenuItem>
                    {inventoryCategory?.map(item => (
                        <MenuItem key={item.name} value={item._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{item.name}</div>
                                <Button onClick={(e) => onRemoveCategory(e, item._id)}>Remove</Button>
                            </div>
                        </MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setPicModal(true)} />
                <ModalLayout title="Category Details" open={picModal} setOpen={() => setPicModal(false)}>
                    <CategoryModal setOpen={() => setPicModal(false)} />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Description"
                multiline
                rows={3}
                name="description"
                value={state.description}
                onChange={onChange}
            />
            <TextFieldSimple
                type="number"
                label="Qty"
                name="qty"
                value={state.qty}
                onChange={onChange}
            />
            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>;
};

export default InventoryInput;
