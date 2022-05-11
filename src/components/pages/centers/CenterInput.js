import { Button, MenuItem } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PICModal from './PICModal';
import ModalLayout from '../../common/Modal';
import BankModal from './BankModal';
import { enumsApi } from 'api/enums';
import { RefetchContext } from 'context/RefetchContext';

const CenterInput = ({ state, setState, onSubmit }) => {
    const context = useContext(RefetchContext)
    const [picModal, setPicModal] = useState(false)
    const [bankModal, setBankModal] = useState(false)

    const [enums, setEnums] = useState({ pic: [], bank: [], kpi: [] })


    useEffect(() => {
        getEnums()
    }, [])

    useEffect(() => {
        if (context.refetch)
            getEnums()
    }, [context.refetch])



    const getEnums = async () => {
        const res = await enumsApi()
        if (!res.error) {
            setEnums(res.data)
        }
    }

    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    return <div className="">
        <form className='space-y-4' onSubmit={onSubmit}>
            <TextFieldSimple
                label="Name"
                name="name"
                value={state.name}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Address"
                name="address"
                value={state.address}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Business Reg Number"
                name="regNumber"
                value={state.regNumber}
                onChange={onChange}
            />
            <div className="flex space-x-3 items-center">
                <SelectField label="PIC Name" name="pic" value={state.pic} onChange={onChange}>
                    <MenuItem value={''}>Select pic name</MenuItem>
                    {enums.pic.map(pic => (
                        <MenuItem key={pic._id} value={pic._id}>{pic.name}</MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setPicModal(true)} />
                <ModalLayout title="PIC Details" open={picModal} setOpen={() => setPicModal(false)}>
                    <PICModal setOpen={() => setPicModal(false)} />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Bank Merchant & Account" name="bank" value={state.bank} onChange={onChange}>
                    <MenuItem value={''}>Select bank merchant</MenuItem>
                    {enums.bank.map(bank => (
                        <MenuItem key={bank._id} value={bank._id}>{bank.name}</MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setBankModal(true)} />
                <ModalLayout title="Bank Merchant Details" open={bankModal} setOpen={() => setBankModal(false)} >
                    <BankModal setOpen={() => setBankModal(false)} />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Center Office Number"
                name="officeNumber" value={state.officeNumber}
                onChange={onChange}
            />
            <SelectField label="KPI" name="kpi" value={state.kpi} onChange={onChange}>
                <MenuItem value={''}>Select kpi</MenuItem>
                {enums.kpi.map(kpi => (
                    <MenuItem key={kpi._id} value={kpi._id}>{kpi.name}</MenuItem>
                ))}
            </SelectField>
            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>
};

export default CenterInput;
