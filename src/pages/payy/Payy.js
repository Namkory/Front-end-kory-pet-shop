import { useState, useEffect } from 'react';
import NoProduct from '../noProduct/NoProduct';
import './Payy.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';

function Payy() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const { t } = useTranslation();
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [payMethod, setPayMethod] = useState(() => {
        const savedPayMethod = localStorage.getItem('pay_method');
        return savedPayMethod !== null ? savedPayMethod : 'vietcombank';
    });
    useEffect(() => {
        localStorage.setItem('pay_method', payMethod);
    }, [payMethod]);
    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        return sum;
    };
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
    const handleOptionChange = (e) => {
        setPayMethod(e.target.value);
    };
    const navigate = useNavigate();
    const handleOrder = (e) => {
        e.preventDefault();
        if (localStorage.getItem('userId') !== null) {
            let time = new Date();
            axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/create-order`, {
                    userId: localStorage.getItem('userId'),
                    fullName: fullName,
                    address: address,
                    phone: phone,
                    email: email,
                    note: note,
                    dataProduct: productStorage,
                    orderDate: time,
                    totalMoney: handleTotalProduct(productStorage),
                })
                .then((res) => {
                    navigate('/pay/payMethod');
                })
                .catch((error) => console.log(error));
        } else {
            alert('Bạn phải đăng nhập trước');
        }
    };

    return (
        <>
            {productStorage && productStorage.length > 0 ? (
                <div className="pay">
                    <div className="pay-container">
                        <div className="pay-container-left">
                            <h1>{t('billingInformation')}</h1>
                            <form>
                                <div className="pay-container-left-fullName">
                                    <div className="pay-container-left-firstName">
                                        <p>{t('name')}*</p>
                                        <input
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => {
                                                setFullName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="pay-container-left-item">
                                    <p>{t('address')}*</p>
                                    <input
                                        type="text"
                                        required
                                        value={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>{t('sdt')}*</p>
                                    <input
                                        type="text"
                                        required
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>{t('email')}*</p>
                                    <input
                                        type="text"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>{t('notOrder')}*</p>
                                    <textarea
                                        rows="20"
                                        required
                                        type="text"
                                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                        value={note}
                                        onChange={(e) => {
                                            setNote(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-right-inner-order">
                                    <button
                                        type="submit"
                                        onClick={(e) => {
                                            handleOrder(e);
                                        }}
                                    >
                                        {t('order')}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="pay-container-right">
                            <div className="pay-container-right-inner">
                                <h1>{t('yourOrder')}</h1>
                                <div className="pay-container-right-inner-productTotal">
                                    <p>{t('productproduct')}</p>
                                    <p>
                                        <b>{t('totallUpperCase')}</b>
                                    </p>
                                </div>
                                {productStorage.map((item, index) => {
                                    return (
                                        <div key={index} className="pay-container-right-inner-product">
                                            <p>
                                                {item.name} × {item.quantity}
                                            </p>
                                            <h5>
                                                <b>
                                                    {numeral(handleTotalPrice1Item(item.quantity, item.price)).format(
                                                        '0,0',
                                                    )}{' '}
                                                    đ
                                                </b>
                                            </h5>
                                        </div>
                                    );
                                })}
                                <div className="pay-container-right-inner-total">
                                    <p>{t('totallowerCase')}</p>
                                    <h5>
                                        <b>{numeral(handleTotalProduct(productStorage)).format('0,0')} đ</b>
                                    </h5>
                                </div>
                                <div className="pay-container-right-inner-total">
                                    <p>{t('paymentmethods')}</p>
                                    <select className="outline-none" value={payMethod} onChange={handleOptionChange}>
                                        <option value="vietcombank">Vietcombank</option>
                                        <option value="momo">Quét mã Momo</option>
                                    </select>
                                </div>
                                <p className="pay-container-right-inner-text">{t('thank')}</p>
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

export default Payy;
