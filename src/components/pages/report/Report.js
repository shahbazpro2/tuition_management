import React from 'react'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AddEditLayout from '../common/AddEditLayout'

const Report = () => {
    return (
        <AddEditLayout title="Report">
            <form className='space-y-4'>
                <SelectField label="Report">
                </SelectField>
                <SelectField label="Center">
                </SelectField>
                <TextFieldSimple
                    label="From Date"
                    type="date"
                    shrink={true}
                />
                <TextFieldSimple
                    label="To Date"
                    type="date"
                    shrink={true}
                />
                <div className="grid grid-cols-2">
                    <div className='cursor-pointer inline-block h-20 text-center'>
                        <img src="https://img.icons8.com/color/48/000000/ms-excel.png" className='m-auto w-12' />
                        Generate Excel
                    </div>
                    <div className='cursor-pointer inline-block h-20 text-center'>
                        <img src="https://img.icons8.com/color/48/000000/pdf-2--v1.png" className='m-auto w-12' />
                        Generate PDF
                    </div>
                </div>
            </form>
        </AddEditLayout>
    )
}

export default Report