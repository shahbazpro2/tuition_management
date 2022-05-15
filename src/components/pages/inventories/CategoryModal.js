import { Button } from '@mui/material';
import { createBankApi } from 'api/enums';
import { createInventoryCategoryApi } from 'api/inventory';
import { FeedbackContext } from 'context/FeedbackContext';
import { RefetchContext } from 'context/RefetchContext';
import React, { useContext, useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const CategoryModal = ({ setOpen }) => {
  const [createApi] = useApi({ successMsg: true, errMsg: true });
  const [getEnums] = useRefetchEnums()
  const [state, setState] = useState({
    name: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    return createApi(createInventoryCategoryApi(state), () => {
      getEnums()
      setOpen()
    })
  }

  return <form className="space-y-5" onSubmit={onSubmit}>
    <TextFieldSimple label="Category Name" name="name" onChange={onChange} />

    <Button variant="contained" type="submit">Add</Button>
  </form>
};

export default CategoryModal;
