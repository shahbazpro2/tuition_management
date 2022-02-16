import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material'
import React from 'react'
import TbCell from './TableCell'

const CustomTable = ({ head, rows, onEdit, onStop }) => {
    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {head.map((h, index) => (
                                <TbCell key={index}>{h}</TbCell>
                            ))}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                {Object.keys(row).map(function (key, index) {

                                    return <TableCell key={index}>
                                        {row[key]}
                                    </TableCell>

                                })}
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => onEdit(row)}>Edit</Button>
                                        <Button variant="contained" color='error' onClick={() => onStop(row)}>Temp/Stop</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CustomTable
