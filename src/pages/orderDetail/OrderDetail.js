import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { flexbox } from '@mui/system';
import numeral from 'numeral';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'productId',
        headerName: 'Product Name',
        width: 250,
        displayName: flexbox,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        editable: true,
        renderCell: (params) => {
            return <div>{numeral(params.row.price).format('0,0')}đ</div>;
        },
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
        editable: true,
    },
];

function OrderDetail() {
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    let [rows, setRows] = useState([]);
    useEffect(() => {
        getOrderDetail();
    }, []);
    const getOrderDetail = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-order-detail?orderId=${id}`);
            const data = res.data;
            console.log('check data', data);
            if (data.errCode === 0) {
                let arr = [];
                data.OrderDetail?.forEach((item) => {
                    arr.push({
                        id: item.id,
                        productId: item.productId,
                        price: +item.price,
                        quantity: item.quantity,
                    });
                });
                setRows(arr);
            }
        } catch (error) {
            console.log(error);
            // Xử lý và thông báo lỗi cho người dùng nếu cần thiết
        }
    };

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                sx={{ textAlign: 'center' }}
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}

export default OrderDetail;
