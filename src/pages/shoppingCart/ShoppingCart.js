import './ShoppingCart.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCheck, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import NoProduct from '../noProduct/NoProduct';

function ShoppingCart({ render }) {
    const productStorage = JSON.parse(localStorage.getItem('products'));

    // const [ count, setCount] = useState(0)
    const [state, setState] = useState(0);

    const handleTotalProduct = (data) => {
        const arr = [];

        if (data && data.length > 0) {
            data.forEach((item) => {
                arr.push(item.price * item.quantity);
            });

            const total = arr.reduce((a, b) => {
                return a + b;
            });

            return total;
        }
    };

    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        return sum;
    };

    const handleDeleteProduct = (id, index) => {
        let arr = [...productStorage];
        const exits = productStorage.find((product) => {
            return product.id === id;
        });

        if (exits) {
            arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
            localStorage.setItem('products', JSON.stringify(arr));
            setState(state + 1);
        }
    };

    const handleUpdateQuantity = (action, id) => {
        console.log('check id', id);

        let arr = [...productStorage];
        if (arr.length > 0) {
            arr.forEach((item, index) => {
                if (item.id === id) {
                    if (action === 'increase') {
                        return (arr[index].quantity = item.quantity + 1);
                    } else {
                        if (item.quantity === 1) {
                            return (arr = [...arr.slice(0, index), ...arr.slice(index + 1)]);
                        } else {
                            return (arr[index].quantity = item.quantity - 1);
                        }
                    }
                }
            });
            localStorage.setItem('products', JSON.stringify(arr));
        }

        setState(state + 1);
    };

    return (
        <>
            {productStorage && productStorage.length !== 0 ? (
                <div className="shoppingCart">
                    <div className="shoppingCart-container">
                        <div className="shoppingCart-left">
                            {/* <div className="shoppingCart-noti">
                            <FontAwesomeIcon icon={faCheck} className="icon" />
                            <p>Gi??? h??ng ???? ???????c c???p nh???t</p>
                        </div> */}

                            <table>
                                <thead>
                                    <tr>
                                        <th>S???N PH???M</th>
                                        <th>GI??</th>
                                        <th>S??? L?????NG</th>
                                        <th>T???NG C???NG</th>
                                    </tr>
                                </thead>
                                {productStorage.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td className="product">
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        className="icon"
                                                        onClick={() => {
                                                            handleDeleteProduct(item.id, index, render());
                                                        }}
                                                    />
                                                    <img src={item.image} alt="avatar" />
                                                    <p>{item.name}</p>
                                                </td>
                                                <td>
                                                    <p>{item.price}</p>
                                                </td>
                                                <td className="quantity">
                                                    <div className="quantity-item">
                                                        <div
                                                            onClick={() => handleUpdateQuantity('increase', item.id)}
                                                            className="quantity-item-icon"
                                                        >
                                                            +
                                                        </div>
                                                        <p>{item.quantity}</p>
                                                        {/* <p>{item.quantity}</p> */}
                                                        <div
                                                            onClick={() => handleUpdateQuantity('decrease', item.id)}
                                                            className="quantity-item-icon"
                                                        >
                                                            -
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{` ${handleTotalPrice1Item(item.quantity, item.price)} ??`}</td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>

                            <div className="shoppingCart-left-footer">
                                <div className="shoppingCart-left-footer-btn">
                                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
                                    <Link to="/">
                                        <p>TI???P T???C XEM S???N PH???M</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shoppingCart-right">
                            <h1>T???NG S??? L?????NG</h1>
                            <div className="shoppingCart-right-total">
                                <p>T???ng c???ng</p>
                                <p>
                                    <b>{handleTotalProduct(productStorage)} ??</b>
                                </p>
                            </div>
                            <div className="shoppingCart-right-total">
                                <p>Giao h??ng</p>
                                <p>
                                    <b>Giao h??ng mi???n ph??</b>
                                </p>
                            </div>
                            <Link to="/pay">
                                <div className="shoppingCart-right-btn">
                                    <p>TI???N H??NH THANH TO??N</p>
                                </div>
                            </Link>
                            <div className="shoppingCart-right-discount">
                                <FontAwesomeIcon icon={faTag} className="icon" />
                                <p>
                                    <b>M?? ??u ????i</b>
                                </p>
                            </div>
                            <div className="shoppingCart-right-discount-input">
                                <input type="text" placeholder="M?? ??u ????i" />
                            </div>
                            <div className="shoppingCart-right-discount-btn">
                                <p>??p d???ng</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoProduct />
            )}
        </>
    );
}

export default ShoppingCart;
