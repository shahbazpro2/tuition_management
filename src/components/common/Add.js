import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Add = ({ title, link }) => {
    const navigate = useNavigate()
    return (
        <div className="flex space-x-1 items-center text-xl font-bold cursor-pointer" onClick={() => navigate(link)}>
            <AddIcon fontSize="inherit" />
            <div >{title}</div>
        </div>
    )
}

export default Add
