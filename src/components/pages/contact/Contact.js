import { Button } from '@mui/material'
import React from 'react'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AddEditLayout from '../common/AddEditLayout'

const Contact = () => {
    return (
        <AddEditLayout title="Contact Us">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <TextFieldSimple
                        label="Name"
                    />
                    <TextFieldSimple
                        label="Phone"
                    />

                </div>
                <TextFieldSimple
                    label="Email"
                    type="email"
                />
                <TextFieldSimple
                    label="Description"
                    multiline={true}
                    rows={4}
                />
                <Button variant="contained" size="large" fullWidth>Submit</Button>

            </div>

        </AddEditLayout>
    )
}

export default Contact