import { Button } from '@mui/material';
import React from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';

const GenerateBillModal = () => {
    return <div className="space-y-7">
        <TextFieldSimple type="date" label="Which Month" InputLabelProps={{ shrink: true }} />
        <div className="space-y-3">
            <div className="text-lg">Additional item to include in</div>
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-4">
                    <SelectField label="Package">
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" />
                </div>
                <div className="col-span-4">
                    <SelectField label="Inventory">
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" />
                </div>
                <div className="col-span-4">
                    <SelectField label="Other">
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" />
                </div>
            </div>
            <div className="text-lg">Any Discount?  </div>
            <SelectField label="Discount List">
            </SelectField>
        </div>

        <Button variant="contained">Submit</Button>
    </div>

};

export default GenerateBillModal;
