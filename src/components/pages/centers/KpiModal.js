import { Button } from '@mui/material';
import { createKpiApi, updateKpiApi } from 'api/kpi';
import React, { useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PICModal = ({ setOpen, data }) => {
    const [apiCall] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState({
        name: data?.name,
        amt: data?.amt
    })

    const [getEnums] = useRefetchEnums()

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        apiCall(createKpiApi(state), () => {
            getEnums()
            setOpen()
        })
    }

    const onUpdate = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        apiCall(updateKpiApi(data?._id, state), () => {
            getEnums()
            setOpen()
        })
    }


    return <form className="space-y-5" onSubmit={data ? onUpdate : onSubmit}>
        <TextFieldSimple label="Name" value={state.name} name="name" required onChange={onChange} />
        <TextFieldSimple label="Amt/Qty" value={state.amt} name="amt" required onChange={onChange} />
        {data ? <Button type="submit" variant="contained" color="primary">Update</Button> :
            <Button variant="contained" type="submit">Add</Button>}
    </form>

};

export default PICModal;
