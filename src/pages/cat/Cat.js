import './Cat.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';

function Cat({ render }) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getAllCats = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=1`);
            const allCats = res.data.products;
            setCats(allCats);
        };

        getAllCats();
    }, []);

    return (
        <div className="cat">
            <div className="cat-container">
                <div className="cat-left">
                    <div className="cat-left-header">
                        <Link to="/">
                            <h1 className="cat-left-header-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="cat-left-header-cat">MÈO CẢNH</h1>
                    </div>
                    <div className="cat-left-categoty">
                        <div className="cat-left-categoty-title">DANH MỤC SẢN PHẨM</div>
                        <div className="cat-left-categoty-content">
                            <Link to="/dog">
                                <p>Chó cảnh</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>Mèo cảnh</p>
                            </Link>
                        </div>
                    </div>
                    <div className="cat-right-products-title">SẢN PHẨM</div>
                    <div className="cat-right-products">
                        {cats.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="cat-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="cat-right-products-item-infor">
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
                <div className="cat-right grid grid-cols-3 gap-6">
                    {cats.map((item, index) => {
                        return (
                            <div key={index} className="cat-right-list-cat ">
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
                                <span>Mèo cảnh</span>
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

export default Cat;
