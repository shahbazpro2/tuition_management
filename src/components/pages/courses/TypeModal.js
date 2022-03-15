import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { FeedbackContext } from 'context/FeedbackContext';
import { createCourseType } from 'api/enums';

const TypeModal = ({ setTypeModal }) => {
    const context = useContext(FeedbackContext)
    const [name, setName] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await createCourseType(name)
        context.setFeedback(res.message, res.error)
        if (!res.error) {
            setTypeModal(false)
        }
    }

    return <div >
        <form className="space-y-5" onSubmit={onSubmit}>
            <TextFieldSimple label="Type Name" required onChange={e => setName(e.target.value)} />
            <Button variant="contained" type="submit">Save</Button>
        </form>
    </div>
};

export default TypeModal;
