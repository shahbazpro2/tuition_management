import { Button, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import SelectField from '../../../common/textFields/SelectField';
import TextFieldSimple from '../../../common/textFields/TextFieldSimple';
import { GlobalContext } from 'context/GlobalContext';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import useApi from 'utils/hooks/useApi';
import { getRequestHqApi } from 'api/requestHq';

const GenerateBillModal = ({ state, setState, selection, onSubmit }) => {
    const [, { data }] = useApi({ errMsg: true }, () => getRequestHqApi(selection))
    console.log('state', state, data)
    const context = useContext(GlobalContext)
    useRefetchEnums()

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    return <div className="space-y-7">
        <TextFieldSimple type="month" label="Which Month" InputLabelProps={{ shrink: true }} value={state.date} name="date" onChange={onChange} />
        <div className="space-y-3">
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-5">
                    <SelectField label="Inventory" name="inventory_id" value={state.inventory_id} onChange={onChange}>
                        <MenuItem value="">Select inventoy</MenuItem>
                        {data?.inventories?.map(({ _id, name }) => (
                            <MenuItem key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </SelectField>
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
