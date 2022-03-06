import { Button } from '@mui/material';
import { createBankApi } from 'api/enums';
import { FeedbackContext } from 'context/FeedbackContext';
import { RefetchContext } from 'context/RefetchContext';
import React, { useContext, useState } from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const BankModal = ({ setOpen }) => {
    const context = useContext(FeedbackContext)
    const refetchContext = useContext(RefetchContext)
    const [state, setState] = useState({
        name: '',
        contactNumber: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await createBankApi(state)
        if (!res.error) {
            refetchContext.setRefetch(true)
            setOpen()
        }
        context.setFeedback(res.message, res.error)
    }

    return <form className="space-y-5" onSubmit={onSubmit}>
        <TextFieldSimple label="Bank Name" name="name" onChange={onChange} />
        <TextFieldSimple label="Bank Account Number" name="accountNumber" onChange={onChange} />

        <Button variant="contained" type="submit">Add</Button>
    </form>
};

export default BankModal;
