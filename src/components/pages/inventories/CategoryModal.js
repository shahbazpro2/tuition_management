import { Button } from '@mui/material';
import React from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const CategoryModal = () => {
  return <div className="space-y-5">
    <TextFieldSimple label="Category Name" />

    <Button variant="contained">Add</Button>
  </div>

};

export default CategoryModal;
