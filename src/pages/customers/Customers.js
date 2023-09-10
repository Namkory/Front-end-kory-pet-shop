import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { flexbox } from '@mui/system';
import './Customers.scss';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'roleId',
        headerName: 'Role',
        width: 100,
        editable: true,
    },
];
function Customers() {
    let [rows, setRows] = React.useState([]);
    useEffect(() => {
        getUser();
    }, []);
    const getUser = async () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/getall-user?id=ALL`)
            .then((res) => {
                const data = res.data;
                if (data.errCode === 0) {
                    let arr = [];
                    data.users?.forEach((item) => {
                        arr.push({
                            id: item.id,
                            fullName: item.fullName,
                            email: item.email,
                            phone: item.phone,
                            address: item.address,
                            roleId: item.roleId,
                        });
                    });
                    setRows(arr);
                }
            })
            .catch((error) => console.log(error));
    };
    const handleDeleteUser = async (idUser) => {
        console.log('check iduser', idUser);
        axios
            .delete(`${process.env.REACT_APP_BACKEND_URL}/delete-user?id=${idUser}`)
            .then((res) => {
                const result = res.data;
                console.log('check result', result);
                if (result.error === 0) {
                    getUser();
                }
            })
            .catch((error) => console.log(error));
    };
    const navigate = useNavigate();
    const handleUpdateUser = (id) => {
        navigate(`edit-user/${id}`);
    };
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="custome-action">
                        <button
                            type="button"
                            className="custome-action1"
                            onClick={() => {
                                handleUpdateUser(params.row.id);
                            }}
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            className="custome-action2"
                            onClick={() => {
                                handleDeleteUser(params.row.id);
                            }}
                        >
                            delete
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <div className="btn-create">
                <Link to="newuser">
                    <div className="btn-create-item">Create new user</div>
                </Link>
            </div>
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
        </>
    );
}

export default Customers;
