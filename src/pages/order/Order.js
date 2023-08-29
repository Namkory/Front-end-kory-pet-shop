import './Order.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { flexbox } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'userId', headerName: 'UserId', width: 70 },
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 150,
        displayName: flexbox,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 100,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'note',
        headerName: 'Note',
        width: 100,
        editable: true,
    },
    {
        field: 'orderDate',
        headerName: 'OrderDate',
        width: 100,
        editable: true,
    },
    {
        field: 'totalMoney',
        headerName: 'TotalMoney',
        width: 100,
        editable: true,
        // renderCell: (params) => {
        //     return <div>{numeral(params.row.totalMoney).format('0,0')}đ</div>;
        //     return <div>{params.row.totalMoney}</div>;
        // },
    },
];

function Order() {
    let [rows, setRows] = React.useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/get-all-orders?id=ALL`)
            .then((res) => {
                const data = res.data;
                if (data.errCode === 0) {
                    let arr = [];
                    data.orders?.forEach((item) => {
                        // console.log('check tien', item.totalMoney);
                        arr.push({
                            id: item.id,
                            userId: item.userId,
                            fullName: item.fullName,
                            email: item.email,
                            phone: item.phone,
                            address: item.address,
                            note: item.note,
                            orderDate: item.orderDate,
                            totalMoney: +item.totalMoney,
                        });
                    });
                    setRows(arr);
                }
            })
            .catch((error) => console.log(error));
    };

    const navigate = useNavigate();
    const handleOrderDetail = (id) => {
        navigate(`order-detail/${id}`);
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="custome-action">
                        <button
                            type="button"
                            className="custome-action1"
                            onClick={() => {
                                handleOrderDetail(params.row.id);
                            }}
                        >
                            Detail
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                sx={{ textAlign: 'center' }}
                rows={rows}
                columns={columns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}

export default Order;
