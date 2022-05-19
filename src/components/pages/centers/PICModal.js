import { Button } from '@mui/material';
import { createPicApi, updatePicApi } from 'api/enums';
import React, { useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PICModal = ({ setOpen, data }) => {
  const [apiCall] = useApi({ successMsg: true, errMsg: true })
  const [state, setState] = useState({
    name: data?.name,
    contactNumber: data?.contactNumber
  })

  const [getEnums] = useRefetchEnums()

  const onChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const onSubmit = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    apiCall(createPicApi(state), () => {
      getEnums()
      setOpen()
    })
  }

  const onUpdate = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    apiCall(updatePicApi(data?._id, state), () => {
      getEnums()
      setOpen()
    })
  }


  return <form className="space-y-5" onSubmit={data ? onUpdate : onSubmit}>
    <TextFieldSimple label="Name" value={state.name} name="name" required onChange={onChange} />
    <TextFieldSimple label="Contact Number" value={state.contactNumber} name="contactNumber" required onChange={onChange} />
    {data ? <Button type="submit" variant="contained" color="primary">Update</Button> :
      <Button variant="contained" type="submit">Add</Button>}
  </form>

};

export default PICModal;
