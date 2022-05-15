import { Button } from '@mui/material';
import { createPicApi } from 'api/enums';
import React, { useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PICModal = ({ setOpen }) => {
  const [createApi] = useApi({ successMsg: true, errMsg: true })
  const [state, setState] = useState({
    name: '',
    contactNumber: ''
  })

  const [getEnums] = useRefetchEnums()

  const onChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const onSubmit = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    createApi(createPicApi(state), () => {
      getEnums()
      setOpen()
    })
  }


  return <form className="space-y-5" onSubmit={onSubmit}>
    <TextFieldSimple label="Name" name="name" required onChange={onChange} />
    <TextFieldSimple label="Contact Number" name="contactNumber" required onChange={onChange} />
    <Button variant="contained" type="submit">Add</Button>
  </form>

};

export default PICModal;
