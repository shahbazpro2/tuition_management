import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getCentersApi } from 'api/center';
import React from 'react';
import useApi from 'utils/hooks/useApi';
import TbCell from '../../common/TableCell';

const CenterKpi = () => {
    const [, { data }] = useApi(false, getCentersApi)

    return <div className='content'>
        <div className="text-xl font-bold mb-5">Center's Kpi</div>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table stickyHeader sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TbCell>Center Name</TbCell>
                        <TbCell>KPI</TbCell>
                        <TbCell>Amt/Qty</TbCell>
                        <TbCell></TbCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left"  >{row?.name}</TableCell>
                            <TableCell align="left"  >{row?.kpi?.name}</TableCell>
                            <TableCell align="left"  >{row?.kpi?.amt}</TableCell>
                            {/*  <TableCell align="left">
                                <div className="flex space-x-2 justify-end">
                                    <Button variant="contained" color="success">Edit</Button>
                                </div>
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
};

export default CenterKpi;
