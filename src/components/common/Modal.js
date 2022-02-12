import { Modal } from '@mui/material';
import React from 'react';

const ModalLayout = (props) => {
    const height = props.height
    return <Modal
        open={props.open}
        onClose={() => { props.setOpen(false) }}
    >
        <div className={`w-[95%] md:w-[500px] ${height || 'h-[55%]'}  overflow-auto absolute rltb-0 m-rltb-auto bg-white rounded-lg p-10`} >
            <div className="text-2xl text-center mb-7">{props.title}</div>
            <div className="mt-10">
                {props.children}
            </div>
        </div>
    </Modal>
};

export default ModalLayout;
