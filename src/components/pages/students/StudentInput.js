import { Button, FormControlLabel, MenuItem, Radio, RadioGroup } from '@mui/material';
import { GlobalContext } from 'context/GlobalContext';
import React, { useContext } from 'react';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const StudentInput = ({ state, setState, onSubmit }) => {
    const context = useContext(GlobalContext)
    useRefetchEnums()

    const onChange = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    return <div className="">
        <form className='space-y-4' onSubmit={onSubmit}>
            <TextFieldSimple
                label="Name"
                name="name"
                value={state.name}
                onChange={onChange}
            />
            <SelectField label="Gender" name="gender" value={state.gender} onChange={onChange}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
            </SelectField>
            <SelectField label="Religion" name="religion" value={state.religion} onChange={onChange}>
                <MenuItem value="muslim">Muslim</MenuItem>
                <MenuItem value="hindu">Hindu</MenuItem>
            </SelectField>
            <TextFieldSimple
                label="Address"
                multiline
                rows={3}
                name="address"
                value={state.address}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Contact Number"
                name="contact"
                value={state.contact}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Emergency Contact Number"
                name="emergencyContact"
                value={state.emergencyContact}
                onChange={onChange}
            />

            <TextFieldSimple
                label="Father Name"
                name="fatherName"
                value={state.fatherName}
                onChange={onChange}
            />
            <TextFieldSimple
                label="Mother Name"
                name="motherName"
                value={state.motherName}
                onChange={onChange}
            />
            <SelectField label="Select Package" name="package" value={state.package} onChange={onChange}>
                <MenuItem value="">Select Package</MenuItem>
                {context.enums?.packages?.map(pkg => (
                    <MenuItem key={pkg._id} value={pkg._id}>{pkg.name}</MenuItem>
                ))}
            </SelectField>
            <SelectField label="Select Courses" name="courses" multiple value={state.courses} onChange={onChange}>
                <MenuItem value="">Select Course</MenuItem>
                {context.enums?.courses?.map(course => (
                    <MenuItem key={course._id} value={course._id}>{course?.type?.name}</MenuItem>
                ))}
            </SelectField>

            <div>
                <div className="text-base">Health Condition</div>
                <div className="flex">
                    <RadioGroup
                        name="health"
                        value={state.health}
                        onChange={onChange}
                    >
                        <div className="flex">
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div>
                <div className="text-base">Prefered Language</div>
                <RadioGroup
                    name="language"
                    value={state.language}
                    onChange={onChange}
                >
                    <div className="grid grid-cols-2">
                        <FormControlLabel value="english" control={<Radio />} label="English" />
                        <FormControlLabel value="malay" control={<Radio />} label="Malay" />
                        <FormControlLabel value="Chinese (Mandarian)" control={<Radio />} label="Chinese (Mandarian)" />
                        <FormControlLabel value="Chinese (Cantonese)" control={<Radio />} label="Chinese (Cantonese)" />
                    </div>
                </RadioGroup>
            </div>

            <Button variant="contained" type="submit" fullWidth>Save</Button>
        </form>
    </div>;
};

export default StudentInput;
