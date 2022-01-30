import { Button, Modal } from '@mui/material';
import React from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const PICModal = () => {
  return <div className="space-y-5">
    <TextFieldSimple label="Name" />
    <TextFieldSimple label="Contact Number" />

    <Button variant="contained">Add</Button>
  </div>

};

export default PICModal;
