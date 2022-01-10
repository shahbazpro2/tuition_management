import { CheckBox } from '@mui/icons-material'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'

const AttendenceTable = () => {
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Attendence</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Student Name</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell>
                                <CheckBox />
                            </TableCell>
                            <TableCell>
                                Ali
                            </TableCell>
                            <TableCell>
                                <TextField
                                    variant="outlined"
                                    multiline
                                    rows={1}

                                />
                            </TableCell>


                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AttendenceTable
