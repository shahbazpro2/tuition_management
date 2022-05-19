import { Button, MenuItem } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PICModal from './PICModal';
import ModalLayout from '../../common/Modal';
import BankModal from './BankModal';
import { deleteBankApi, deletePicApi } from 'api/enums';
import useApi from 'utils/hooks/useApi';
import { deleteCenterKpiApi } from 'api/kpi';
import KpiModal from './KpiModal'
import { GlobalContext } from 'context/GlobalContext';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';

const CenterInput = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    const [picModal, setPicModal] = useState(false)
    const [bankModal, setBankModal] = useState(false)
    const [kpiModal, setKpiModal] = useState(false)
    const [editData, setEditData] = useState({})
    const [deleteApi] = useApi({ successMsg: true, errMsg: true })

    const enums = context.enums
    const [getEnums] = useRefetchEnums()

    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const onRemovePic = (e, id) => {
        e.stopPropagation()
        deleteApi(deletePicApi(id), () => {
            getEnums()
        })
    }

    const onRemoveBank = (e, id) => {
        e.stopPropagation()
        deleteApi(deleteBankApi(id), () => {
            getEnums()
        })
    }

    const onRemoveKpi = (e, id) => {
        e.stopPropagation()
        deleteApi(deleteCenterKpiApi(id), () => {
            getEnums()
        })
    }

    const onEdit = (e, data, type) => {
        e.stopPropagation()
        setEditData(data)
        if (type === 'pic') {
            setPicModal(true)
        } else if (type === 'bank') {
            setBankModal(true)
        } else if (type === 'kpi') {
            setKpiModal(true)
        }
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
                <SelectField label="PIC Name" name="pic" value={state.pic} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return enums?.pic?.find(x => x._id === selected)?.name || 'Select pic name'
                    }
                }} >
                    <MenuItem value={''}>Select pic name</MenuItem>
                    {enums?.pic?.map(pic => (
                        <MenuItem key={pic._id} value={pic._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{pic.name}</div>
                                <div className="flex space-x-2">
                                    <Button onClick={(e) => onEdit(e, pic, 'pic')}>Edit</Button>
                                    <Button onClick={(e) => onRemoveBank(e, pic._id)}>Remove</Button>
                                </div>
                            </div>
                        </MenuItem>
                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setPicModal(true)} />
                <ModalLayout title="PIC Details" open={picModal} setOpen={() => setPicModal(false)}>
                    <PICModal setOpen={() => setPicModal(false)} data={editData} />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Bank Merchant & Account" name="bank" value={state.bank} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return enums?.bank?.find(x => x._id === selected)?.name || 'Select bank merchant'
                    }
                }}>
                    <MenuItem value={''}>Select bank merchant</MenuItem>
                    {enums?.bank?.map(bank => (
                        <MenuItem key={bank._id} value={bank._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{bank.name}</div>
                                <div className="flex space-x-2">
                                    <Button onClick={(e) => onEdit(e, bank, 'bank')}>Edit</Button>
                                    <Button onClick={(e) => onRemoveBank(e, bank._id)}>Remove</Button>
                                </div>
                            </div>
                        </MenuItem>

                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setBankModal(true)} />
                <ModalLayout title="Bank Merchant Details" open={bankModal} setOpen={() => setBankModal(false)} >
                    <BankModal setOpen={() => setBankModal(false)} data={editData} />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Center Office Number"
                name="officeNumber" value={state.officeNumber}
                onChange={onChange}
            />
            <div className="flex space-x-3 items-center">
                <SelectField label="KPI" name="kpi" value={state.kpi} onChange={onChange} selectProps={{
                    renderValue: (selected) => {
                        return enums?.kpi?.find(x => x._id === selected)?.name || 'Select kpi'
                    }
                }}>
                    <MenuItem value={''}>Select kpi</MenuItem>
                    {enums?.kpi?.map(kpi => (
                        <MenuItem key={kpi._id} value={kpi._id}>
                            <div className="flex items-center justify-between w-full">
                                <div>{kpi.name}</div>
                                <div className="flex space-x-2">
                                    <Button onClick={(e) => onEdit(e, kpi, 'kpi')}>Edit</Button>
                                    <Button onClick={(e) => onRemoveKpi(e, kpi._id)}>Remove</Button>
                                </div>
                            </div>
                        </MenuItem>

                    ))}
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setKpiModal(true)} />
                <ModalLayout title="Kpi" open={kpiModal} setOpen={() => setKpiModal(false)} >
                    <KpiModal setOpen={() => setKpiModal(false)} data={editData} />
                </ModalLayout>
            </div>
            <SelectField label="Status" name="status" value={state.status} onChange={onChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>
};

export default CenterInput;
