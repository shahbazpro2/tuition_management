/* eslint-disable react/no-unescaped-entities */
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TbCell from '../../common/TableCell';
import { url_editCourse } from '../../functions/pageUrls';

function createData(id, name, kpi, amt) {
    return { id, name, kpi, amt };
}

const rows = [
    createData("001", 'Ampang', 'Bhassa Malaysia', 'RM100000'),
    createData("002", 'BM', 'Bhassa Malaysia', 'RM100000'),
    createData("003", 'BM', 'Bhassa Malaysia', 'RM100000'),
    createData("004", 'BM', 'Bhassa Malaysia', 'RM100000'),
    createData("005", 'BM', 'Bhassa Malaysia', 'RM100000'),

];

const CenterKpi = () => {
    const navigate = useNavigate()
    return <div className='content'>
        <div className="text-xl font-bold mb-5">Center's Kpi</div>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table stickyHeader sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TbCell>Center Id Number</TbCell>
                        <TbCell>Center Name</TbCell>
                        <TbCell>KPI</TbCell>
                        <TbCell>Amt/Qty</TbCell>
                        <TbCell></TbCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                {row.id}
                            </TableCell>
                            <TableCell align="left"  >{row.name}</TableCell>
                            <TableCell align="left"  >{row.kpi}</TableCell>
                            <TableCell align="left"  >{row.amt}</TableCell>
                            <TableCell align="left">
                                <div className="flex space-x-2 justify-end">
                                    <Button variant="contained" color="success">Edit</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
};

export default CenterKpi;
