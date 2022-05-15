import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { FeedbackContext } from 'context/FeedbackContext';
import { createCourseLanguage } from 'api/enums';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import useApi from 'utils/hooks/useApi';

const LanguageModal = ({ setLanguageModal }) => {
    const [createApi] = useApi({ successMsg: true, errMsg: true })
    const [name, setName] = useState('')
    const [getEnums] = useRefetchEnums()

    const onSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        createApi(createCourseLanguage(name), () => {
            getEnums()
            setLanguageModal(false)
        })

    }

    return <div >
        <form className="space-y-5" onSubmit={onSubmit}>
            <TextFieldSimple label="Language Name" name="language" required onChange={e => setName(e.target.value)} />
            <Button variant="contained" type="submit">Save</Button>
        </form>
    </div>
};

export default LanguageModal;
