import { Button } from '@mui/material';
import { createBankApi, updateBankApi } from 'api/enums';
import React, { useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const BankModal = ({ setOpen, data }) => {
    const [apiCall] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState({
        name: data?.name,
        accountNumber: data?.accountNumber
    })
    const [getEnums] = useRefetchEnums()

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        apiCall(createBankApi(state), () => {
            getEnums()
            setOpen()
        })
    }

    const onUpdate = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        apiCall(updateBankApi(data?._id, state), () => {
            getEnums()
            setOpen()
        })
    }

    return <form className="space-y-5" onSubmit={data ? onUpdate : onSubmit}>
        <TextFieldSimple label="Bank Name" value={state.name} name="name" onChange={onChange} />
        <TextFieldSimple label="Bank Account Number" value={state.accountNumber} name="accountNumber" onChange={onChange} />

        {data ? <Button type="submit" variant="contained" color="primary">Update</Button> :
            <Button variant="contained" type="submit">Add</Button>}
    </form>
};

export default BankModal;
