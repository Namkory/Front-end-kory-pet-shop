import './ShoppingCart.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NoProduct from '../noProduct/NoProduct';
import numeral from 'numeral';

function ShoppingCart({ render }) {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const { t } = useTranslation();
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
            const formattedTotal = numeral(total).format('0,0');
            return formattedTotal;
        }
    };
    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        const formattedTotal = numeral(sum).format('0,0');
        return formattedTotal;
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
                            <table>
                                <thead>
                                    <tr>
                                        <th>{t('products')}</th>
                                        <th>{t('price')}</th>
                                        <th>{t('products')}</th>
                                        <th>{t('quantity')}</th>
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
                                                    <p>
                                                        {numeral(+item.price).format('0,0')}
                                                        <b>đ</b>
                                                    </p>
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
                                                <td>
                                                    {` ${handleTotalPrice1Item(item.quantity, item.price)}`}
                                                    <b>đ</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                            <div className="shoppingCart-left-footer">
                                <div className="shoppingCart-left-footer-btn">
                                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
                                    <Link to="/">
                                        <p>{t('continuetoviewproducts')}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shoppingCart-right">
                            <h1>{t('totalquantity')}</h1>
                            <div className="shoppingCart-right-total">
                                <p>{t('totallowerCase')}</p>
                                <p>
                                    <b>
                                        {handleTotalProduct(productStorage)}
                                        <b>đ</b>
                                    </b>
                                </p>
                            </div>
                            <Link to="/pay">
                                <div className="shoppingCart-right-btn">
                                    <p>{t('pay')}</p>
                                </div>
                            </Link>
                            <div className="shoppingCart-right-discount">
                                <FontAwesomeIcon icon={faTag} className="icon" />
                                <p>
                                    <b>{t('promotionalCode')}</b>
                                </p>
                            </div>
                            <div className="shoppingCart-right-discount-input">
                                <input type="text" placeholder="Mã ưu đãi" />
                            </div>
                            <div className="shoppingCart-right-discount-btn">
                                <p>{t('apply')}</p>
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
