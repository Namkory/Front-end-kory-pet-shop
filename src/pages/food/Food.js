import './Food.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';

function Dog({ render }) {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const getAllFoods = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=2`);
            const allFoods = res.data.products;
            setFoods(allFoods);
        };

        getAllFoods();
    }, []);

    return (
        <div className="food">
            <div className="food-container">
                <div className="food-left">
                    <div className="food-left-header">
                        <Link to="/">
                            <h1 className="food-left-header-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="food-left-header-food">CHÓ CẢNH</h1>
                    </div>
                    <div className="food-left-categoty">
                        <div className="food-left-categoty-title">DANH MỤC SẢN PHẨM</div>
                        <div className="food-left-categoty-content">
                            <Link to="/dog">
                                <p>Chó cảnh</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>Mèo cảnh</p>
                            </Link>
                        </div>
                    </div>
                    <div className="food-right-products-title">SẢN PHẨM</div>
                    <div className="food-right-products">
                        {foods.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="food-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="food-right-products-item-infor">
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
                <div className="food-right grid grid-cols-3 gap-6">
                    {foods.map((item, index) => {
                        return (
                            <div key={index} className="food-right-list-food ">
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
                                <span>{item.description}</span>
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
