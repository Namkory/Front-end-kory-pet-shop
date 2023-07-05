import './ProductsAdmin.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import images from '../../asset/image/index';
import axios from 'axios';
import { flexbox } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'thumbnail',
        headerName: 'Image',
        type: 'number',
        width: 110,
        renderCell: (params) => {
            return (
                <>
                    <div className="cellWithImg">
                        <img
                            className="cellImg"
                            src={params.row.thumbnail ? params.row.thumbnail : images.noImage1}
                            alt="avatar"
                        />
                    </div>
                </>
            );
        },
    },

    {
        field: 'title',
        headerName: 'Name',
        width: 150,
        displayName: flexbox,
        editable: true,
    },
    {
        field: 'discount',
        headerName: 'Discount',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'categoryId',
        headerName: 'Category',
        width: 100,
        editable: true,
    },
];

function Products() {
    let [rows, setRows] = React.useState([]);

    useEffect(() => {
        getproduct();
    }, []);

    const getproduct = async () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=ALL`)
            .then((res) => {
                const data = res.data;
                if (data.errCode === 0) {
                    let arr = [];
                    data.products?.forEach((item) => {
                        arr.push({
                            id: item.id,
                            categoryId: item.categoryId,
                            title: item.title,
                            price: item.price,
                            discount: item.discount,
                            thumbnail: item.thumbnail === null ? images.noImage1 : item.thumbnail,
                        });
                    });
                    setRows(arr);
                }
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteProduct = async (idProduct) => {
        axios
            .delete(`${process.env.REACT_APP_BACKEND_URL}/delete-product?id=${idProduct}`)
            .then((res) => {
                const result = res.data;
                if (result.error === 0) {
                    getproduct();
                }
            })
            .catch((error) => console.log(error));
    };

    const navigate = useNavigate();

    const handleUpdateProduct = (id) => {
        navigate(`edit-product/${id}`);
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
                                handleUpdateProduct(params.row.id);
                            }}
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            className="custome-action2"
                            onClick={() => {
                                handleDeleteProduct(params.row.id);
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
                <Link to="new">
                    <div className="btn-create-item">Create new product</div>
                </Link>
            </div>
            <Box sx={{ height: 700, width: '100%' }}>
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

export default Products;
