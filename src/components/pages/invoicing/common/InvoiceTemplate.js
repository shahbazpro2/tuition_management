/* eslint-disable no-undef */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import moment from 'moment'
function createRow(id, description, qty, amount) {
    return { id, description, qty, amount };
}

const rows = [
    createRow(1, "One Subject one day per week", 1, 'RM240'),
    createRow(2, "KPSC1", 1, 'RM50'),
];

const InvoiceTemplate = ({ data }) => {

    const { package: stPackage } = data?.student || {}
    const { student, discount, inventory_id, inventory_qty, package_id, package_qty, other_id, other_qty } = data || {}

    return <div className="content dark:text-white print:text-black">
        <div className="grid grid-cols-2">
            <div className="flex space-x-5">
                <img src={`${process.env.PUBLIC_URL}/assets/logo_default.png`} width="45" />
                <div>
                    <div>{student?.name}</div>
                    <div>
                        {student?.address}
                    </div>
                </div>
            </div>
            <div className="ml-auto">
                <div className="text-base">Ref: {data?._id}</div>
                <div className="text-base">Date: {moment(data?.invoiceDate).format('yyy MM DD')}</div>
            </div>
        </div>
        <div className="my-20">
            <TableContainer>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="left">Item Description</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>{1}</TableCell>
                            <TableCell >{stPackage?.name}, {stPackage?.subject} Subjects, {stPackage?.days} Days</TableCell>
                            <TableCell align="right">{1}</TableCell>
                            <TableCell align="right">RM{stPackage?.amount}</TableCell>
                        </TableRow>

                        {package_id &&
                            <TableRow>
                                <TableCell>{2}</TableCell>
                                <TableCell >{package_id?.name}, {package_id?.subject} Subjects, {package_id?.days} Days</TableCell>
                                <TableCell align="right">{package_qty}</TableCell>
                                <TableCell align="right">RM{package_id?.amount}</TableCell>
                            </TableRow>
                        }

                        {inventory_id &&
                            <TableRow>
                                <TableCell>{3}</TableCell>
                                <TableCell >{inventory_id?.name}, {inventory_id?.description}</TableCell>
                                <TableCell align="right">{1}</TableCell>
                                <TableCell align="right">RM{inventory_id?.amount}</TableCell>
                            </TableRow>
                        }
                        {other_id &&
                            <TableRow>
                                <TableCell>{4}</TableCell>
                                <TableCell >{stPackage?.name}, {stPackage?.subject} Subjects, {stPackage?.days} Days</TableCell>
                                <TableCell align="right">{1}</TableCell>
                                <TableCell align="right">RM{stPackage?.amount}</TableCell>
                            </TableRow>
                        }
                        <TableRow>
                            <TableCell colSpan={3} align="right">Total</TableCell>
                            <TableCell align="right">RM{stPackage?.amount}</TableCell>
                        </TableRow>
                        {discount &&
                            <TableRow>
                                <TableCell colSpan={3} align="right">Discount {discount?.discount}% (Applicable if payment made before 7th of the month)(Optional)</TableCell>
                                <TableCell align="right">RM{stPackage?.amount}</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
        <div className="flex justify-between">
            <div>
                <div>Kindly remit the payment to the following bank:</div>
                <div>Bank xxxxxxxxxxxxx</div>
            </div>
            <div className='print:hidden'>
                <Button variant="contained" onClick={() => window.print()}>Download as pdf</Button>
            </div>

        </div>
    </div >;
};

export default InvoiceTemplate;
