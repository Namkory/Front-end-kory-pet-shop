import './ProductDetail.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import images from '../../asset/image';

function ProductDetail() {
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        const getAllProductDetails = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=3`);
            const allproductDetails = res.data.products;
            setProductDetails(allproductDetails);
        };

        getAllProductDetails();
    }, []);

    return (
        <div className="productDetail">
            <div className="productDetail-container">
                <div className="productDetail-left">
                    <div className="productDetail-left-products-title">SẢN PHẨM</div>
                    <div className="productDetail-left-products">
                        {productDetails.slice(0, 5).map((item, index) => {
                            return (
                                <div key={index} className="productDetail-left-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="productDetail-left-products-item-infor">
                                        <p className="title">{item.title}</p>
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
                <div className="productDetail-right grid grid-cols-2 gap-x-6">
                    <div className="productDetail-right-img">
                        <img src={images.golden} alt="golden" />
                    </div>
                    <div className="productDetail-right-infor">
                        <div className="productDetail-right-header">
                            <Link to="/">
                                <h1 className="productDetail-right-header-home">TRANG CHỦ</h1>
                            </Link>
                            <span>/</span>
                            <h1 className="productDetail-right-header-dog">CHÓ CẢNH</h1>
                        </div>
                        <div className="productDetail-right-title">
                            <h1>Chó Golden</h1>
                        </div>
                        <h1>6,870,000đ</h1>
                        <p>
                            Sang tháng 4 sẽ cho xuất chuồng đàn Golden siêu cute cả nhà nhé. Đàn này được cái mặt bé nào
                            cũng ngộ nghĩnh đáng yêu lắm, mọi người cứ nhìn ảnh là sẽ biết ạ
                        </p>
                        <div className="productDetail-right-infor-footer">
                            <div className="productDetail-right-infor-footer-quantity">
                                <input type="number" step="1" min="0" max="9999" placeholder="1" />
                            </div>
                            <div className="productDetail-right-infor-footer-btn">
                                <p>THÊM VÀO GIỎ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
