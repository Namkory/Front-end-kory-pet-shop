import './Accessory.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';

function Accessory({ render }) {
    const [accessorys, setAccessorys] = useState([]);

    useEffect(() => {
        const getAllAccessorys = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=3`);
            const allAccessorys = res.data.products;
            setAccessorys(allAccessorys);
        };

        getAllAccessorys();
    }, []);

    return (
        <div className="accessory">
            <div className="accessory-container">
                <div className="accessory-left">
                    <div className="accessory-left-header">
                        <Link to="/">
                            <h1 className="accessory-left-header-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="accessory-left-header-accessory">PHỤ KIỆN</h1>
                    </div>
                    <div className="accessory-left-categoty">
                        <div className="accessory-left-categoty-title">DANH MỤC SẢN PHẨM</div>
                        <div className="accessory-left-categoty-content">
                            <Link to="/accessory">
                                <p>Chó cảnh</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>Mèo cảnh</p>
                            </Link>
                        </div>
                    </div>
                    <div className="accessory-right-products-title">SẢN PHẨM</div>
                    <div className="accessory-right-products">
                        {accessorys.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="accessory-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="accessory-right-products-item-infor">
                                        <p>{item.title}</p>
                                        <p>
                                            <b>
                                                {item.price}
                                                <u>đ</u>
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="accessory-right grid grid-cols-3 gap-6">
                    {accessorys.map((item, index) => {
                        return (
                            <div key={index} className="accessory-right-list-accessory ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render())}
                                        type="button"
                                        className="btn"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/productDetail">
                                        <button
                                            onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </div>
                                <span>Phụ kiện</span>
                                <h1>{item.title}</h1>
                                <p>
                                    {item.price}
                                    <b>
                                        <u>đ</u>
                                    </b>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Accessory;
