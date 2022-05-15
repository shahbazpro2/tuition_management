import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { createCourseType } from 'api/enums';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import useApi from 'utils/hooks/useApi';

const TypeModal = ({ setTypeModal }) => {
    const [createApi] = useApi({ successMsg: true, errMsg: true })
    const [name, setName] = useState('')
    const [getEnums] = useRefetchEnums()
    const onSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        createApi(createCourseType(name), () => {
            getEnums()
            setTypeModal(false)
        })

    }

    return <div >
        <form className="space-y-5" onSubmit={onSubmit}>
            <TextFieldSimple label="Type Name" required onChange={e => setName(e.target.value)} />
            <Button variant="contained" type="submit">Save</Button>
        </form>
    </div>
};

export default TypeModal;
