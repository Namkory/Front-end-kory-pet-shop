import './Dog.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';

function Dog({ render }) {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getAllDogs = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=0`);
            const allDogs = res.data.products;
            setDogs(allDogs);
        };

        getAllDogs();
    }, []);

    return (
        <div className="dog">
            <div className="dog-container">
                <div className="dog-left">
                    <div className="dog-left-header">
                        <Link to="/">
                            <h1 className="dog-left-header-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="dog-left-header-dog">CHÓ CẢNH</h1>
                    </div>
                    <div className="dog-left-categoty">
                        <div className="dog-left-categoty-title">DANH MỤC SẢN PHẨM</div>
                        <div className="dog-left-categoty-content">
                            <Link to="/dog">
                                <p>Chó cảnh</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>Mèo cảnh</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dog-right-products-title">SẢN PHẨM</div>
                    <div className="dog-right-products">
                        {dogs.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="dog-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="dog-right-products-item-infor">
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
                <div className="dog-right grid grid-cols-3 gap-6">
                    {dogs.map((item, index) => {
                        return (
                            <div key={index} className="dog-right-list-dog ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleAddProduct(item, render())}
                                    >
                                        Add
                                    </button>
                                </div>
                                <span>Chó cảnh</span>
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

export default Dog;
