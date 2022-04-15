import { getStudentInvoiceApi } from 'api/StudentInvoice';
import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import InvoiceTemplate from '../common/InvoiceTemplate';

const StudentInvoice = () => {
    const params = useParams()
    const [, { data }] = useApi({ errMsg: true }, () => getStudentInvoiceApi(params.id))
    return <div>
        {!data ? <div>No Invoice Created</div> :
            <InvoiceTemplate data={data} />}
    </div>;
};

export default StudentInvoice;
