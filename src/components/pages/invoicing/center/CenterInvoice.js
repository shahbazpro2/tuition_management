import { getCenterInvoiceApi } from 'api/centerInvoice';
import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import InvoiceTemplate from './InvoiceTemplate';

const CenterInvoice = () => {
    const params = useParams()
    const [, { data }] = useApi({ errMsg: true }, () => getCenterInvoiceApi(params.id))
    return <div>
        {!data ? <div>No Invoice Created</div> :
            <InvoiceTemplate data={data} />}
    </div>;
};

export default CenterInvoice;
