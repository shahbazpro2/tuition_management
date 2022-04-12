import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { FeedbackContext } from 'context/FeedbackContext';
import { createCourseLanguage } from 'api/enums';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';

const LanguageModal = ({ setLanguageModal }) => {
    const context = useContext(FeedbackContext)
    const [name, setName] = useState('')
    const [getEnums] = useRefetchEnums()

    const onSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        const res = await createCourseLanguage(name)
        context.setFeedback(res.message, res.error)
        if (!res.error) {
            setLanguageModal(false)
            getEnums()
        }
    }

    return <div >
        <form className="space-y-5" onSubmit={onSubmit}>
            <TextFieldSimple label="Language Name" name="language" required onChange={e => setName(e.target.value)} />
            <Button variant="contained" type="submit">Save</Button>
        </form>
    </div>
};

export default LanguageModal;
