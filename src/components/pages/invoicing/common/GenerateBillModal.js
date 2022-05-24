import { Button, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';
import { GlobalContext } from 'context/GlobalContext';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';

const GenerateBillModal = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    useRefetchEnums()

    const onChange = (e) => {
        const { name, value, type, min, max } = e.target
        if (type === 'number') {
            if (value === '') setState({ ...state, [name]: '' })
            else if (value < min) {
                setState({ ...state, [name]: min })
            } else if (max && value > max) {
                setState({ ...state, [name]: max })
            } else {
                setState({ ...state, [name]: value })
            }
        } else {
            setState({ ...state, [name]: value })
        }
    }
    return <div className="space-y-7">
        <TextFieldSimple type="month" label="Which Month" InputLabelProps={{ shrink: true }} value={state.date} name="date" onChange={onChange} />
        <div className="space-y-3">
            <div className="text-lg">Additional item to include in</div>
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-4">
                    <SelectField label="Package" name="package_id" value={state.package_id} onChange={onChange}>
                        <MenuItem value="">Select package</MenuItem>
                        {context.enums?.packages?.map(({ _id, name }) => (
                            <MenuItem key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" type="number" InputProps={{ inputProps: { min: 1 } }} name="package_qty" value={state.package_qty} onChange={onChange} />
                </div>
                <div className="col-span-4">
                    <SelectField label="Inventory" name="inventory_id" value={state.inventory_id} onChange={onChange}>
                        <MenuItem value="">Select inventory</MenuItem>
                        {context.enums?.inventories?.map(({ _id, name }) => (
                            <MenuItem key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" type="number" InputProps={{ inputProps: { min: 1 } }} name="inventory_qty" value={state.inventory_qty} onChange={onChange} />
                </div>
                <div className="col-span-4">
                    <SelectField label="Other" name="other_id" value={state.other_id} onChange={onChange}>
                        <MenuItem value="">Select other</MenuItem>
                        {context.enums?.others?.map(({ _id, name }) => (
                            <MenuItem key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </SelectField>
                </div>
                <div className="col-span-1">
                    <TextFieldSimple label="Qty" type="number" InputProps={{ inputProps: { min: 1 } }} name="other_qty" value={state.other_qty} onChange={onChange} />
                </div>
            </div>
            <div className="text-lg">Any Discount?  </div>
            <SelectField label="Discount List" name="discount" value={state.discount} onChange={onChange}>
                <MenuItem value="">Select discount</MenuItem>
                {context.enums?.discounts?.map(({ _id, name }) => (
                    <MenuItem key={_id} value={_id}>{name}</MenuItem>
                ))}
            </SelectField>
        </div>

        <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </div>

};

export default GenerateBillModal;
