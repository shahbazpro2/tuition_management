import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import TbCell from '../../../common/TableCell';
import useApi from 'utils/hooks/useApi'
import { getInventoriesApi } from 'api/inventory'


const InventoryTable = ({ selectInventories, setSelectInventories }) => {
    const [, { data }] = useApi({}, getInventoriesApi)

    const onChange = (id) => {
        if (selectInventories?.includes(id)) {
            setSelectInventories(selectInventories.filter(item => item !== id))
        } else {
            setSelectInventories([...selectInventories, id])
        }
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>Select</TbCell>
                            <TbCell>Description</TbCell>
                            <TbCell>Qty</TbCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"  ><Checkbox checked={selectInventories?.includes(row?._id)} onChange={() => onChange(row?._id)} /></TableCell>
                                <TableCell align="left"  >{row?.description}</TableCell>
                                <TableCell align="left"  >{row?.qty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default InventoryTable
