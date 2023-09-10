import './NewProductAdmin.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import CommonUtils from '../../CommonUtils';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function NewProductAdmin() {
    const [file, setFile] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    useEffect(() => {
        if (id) {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/get-detail-product?id=${id}`)
                .then((res) => {
                    const result = res.data;
                    if (result.errCode === 0) {
                        setFile(result.data.thumbnail);
                        setProductName(result.data.title);
                        setProductPrice(result.data.price);
                        setDiscount(result.data.discount);
                        setDescription(result.data.description);
                        setCategoryId(result.data.categoryId);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            setFile('');
            setProductName('');
            setProductPrice('');
            setDiscount('');
            setDescription('');
            setCategoryId(0);
        }
    }, [id]);
    // handle xử lý gọi ảnh và chuyển ảnh sang base64
    const handleOnChange = async (e) => {
        let data = e.target.files;
        let files = data[0];

        if (files) {
            let base64 = await CommonUtils.getBase64(files);

            setFile(base64);
        }
    };
    const navigate = useNavigate();
    const handleSubmiss = (e) => {
        e.preventDefault();

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/create-product`, {
                categoryId: parseInt(categoryId),
                title: productName,
                price: productPrice,
                discount: discount,
                thumbnail: file,
                description: description,
            })
            .then((res) => {
                const result = res.data;
                if (result.errCode === 0) {
                    navigate('/products');
                }
            })
            .catch((error) => console.log(error));
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`${process.env.REACT_APP_BACKEND_URL}/update-product`, {
                id: id,
                categoryId: parseInt(categoryId),
                title: productName,
                price: productPrice,
                discount: discount,
                thumbnail: file,
                description: description,
            })
            .then((res) => {
                const result = res.data;
                if (result.errCode === 0) {
                    navigate('/admin/products');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="newproduct">
            <div className="newproduct-header">
                <h1 className="text-slate-500">{id ? 'Edit Product' : 'Add New Product'}</h1>
            </div>
            <div className="newproduct-content">
                <div className="newproduct-content-left">
                    <img src={file ? file : images.noImage1admin} alt="ko co anh" />
                </div>
                <div className="newproduct-content-right">
                    <form className="grid grid-cols-2 gap-8">
                        <div className="form-input">
                            <label htmlFor="file">
                                Image: <FontAwesomeIcon icon={faUpload} className="icon" />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => handleOnChange(e)}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <div className="form-input">
                            <label>Product Name</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => {
                                    setProductName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-input">
                            <label>Product Price</label>
                            <input
                                type="text"
                                value={productPrice}
                                onChange={(e) => {
                                    setProductPrice(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-input">
                            <label>Discount</label>
                            <input
                                type="text"
                                value={discount}
                                onChange={(e) => {
                                    setDiscount(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-input">
                            <label>Description</label>
                            <textarea
                                rows="4"
                                cols="40"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            ></textarea>
                        </div>
                        <div className="form-input">
                            <label>Category id:</label>
                            <br />
                            <select onChange={(e) => setCategoryId(e.target.value)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        {id ? (
                            <button
                                onClick={(e) => {
                                    handleUpdate(e);
                                }}
                                className="btn"
                                type="submit"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                className="btn"
                                type="submit"
                                onClick={(e) => {
                                    handleSubmiss(e);
                                }}
                            >
                                Create
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewProductAdmin;
