import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faDeleteLeft, faGlobe, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Link, useNavigate } from 'react-router-dom';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import './Header.scss';
import images from '../../asset/image';
import Wrapper from '../wrapper/Wrapper';
import ModalLogin from '../Modal/ModalLogin';

function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const localUserInfor = localStorage.getItem('userName');
    const [state, setState] = useState(0);
    const [active, setActive] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const show1 = () => setVisible1(true);
    const hide1 = () => setVisible1(false);
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
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        navigate('/login');
        setState(state - 1);
    };
    const changeLanguage = (lng) => {
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    };
    // Gọi hàm changeLanguage khi trang được tải để khôi phục ngôn ngữ từ localStorage
    window.onload = () => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    };

    return (
        <div className="main">
            <div className="header">
                <div className="header-container">
                    <Link to="/">
                        <div
                            className="header-container-logo"
                            onClick={() => {
                                setActive(0);
                            }}
                        >
                            <img src={images.noImage} alt="logo" />
                        </div>
                    </Link>
                    <div className="header-container-mid ">
                        <Link to="/intro">
                            <div
                                className={`header-container-mid-menu-item ${active === 1 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                {t('intro')}
                            </div>
                        </Link>
                        <Link to="/dog">
                            <div
                                className={`header-container-mid-menu-item ${active === 2 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                {t('dog')}
                            </div>
                        </Link>
                        <Link to="/cat">
                            <div
                                className={`header-container-mid-menu-item ${active === 3 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(3);
                                }}
                            >
                                {t('cat')}
                            </div>
                        </Link>
                        <Link to="/food">
                            <div
                                className={`header-container-mid-menu-item ${active === 4 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(4);
                                }}
                            >
                                {t('food')}
                            </div>
                        </Link>
                        <Link to="/accessory">
                            <div
                                className={`header-container-mid-menu-item ${active === 5 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(5);
                                }}
                            >
                                {t('accessory')}
                            </div>
                        </Link>
                        <Link to="/news">
                            <div
                                className={`header-container-mid-menu-item ${active === 6 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(6);
                                }}
                            >
                                {t('news')}
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div
                                className={`header-container-mid-menu-item ${active === 7 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(7);
                                }}
                            >
                                {t('contact')}
                            </div>
                        </Link>
                    </div>
                    <div className="header-container-right">
                        <Tippy
                            interactive
                            visible={visible1}
                            onClickOutside={hide1}
                            render={(attrs) => (
                                <div className="tippy-bag" tabIndex="-1" {...attrs}>
                                    <div className="language">
                                        <div
                                            className="en"
                                            onClick={() => {
                                                changeLanguage('en');
                                            }}
                                        >
                                            English
                                        </div>
                                        <div
                                            className="vi"
                                            onClick={() => {
                                                changeLanguage('vi');
                                            }}
                                        >
                                            Vietnamese
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <div className="header-container-right-item" onClick={visible1 ? hide1 : show1}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                        </Tippy>
                        {localUserInfor == null ? (
                            <Link to="/login">
                                <div className="header-container-right-item i1 userslash">
                                    <FontAwesomeIcon icon={faUser} />
                                    <p className="log">{t('login')}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className="header-container-right-item i1 user" onClick={handleLogout}>
                                <FontAwesomeIcon icon={faUserSlash} />
                                <p className="log">{t('logout')}</p>
                            </div>
                        )}
                        <Tippy
                            interactive
                            visible={visible}
                            onClickOutside={hide}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="tippy-bag" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        {productStorage && productStorage.length !== 0 ? (
                                            <>
                                                {productStorage.map((item, index) => {
                                                    return (
                                                        <div key={index} className="tippy-bag-product">
                                                            <img
                                                                src={item.image ? item.image : images.new6}
                                                                alt="avatar product"
                                                            />
                                                            <div className="tippy-bag-product-infor">
                                                                <h5>{item.name}</h5>
                                                                <p>
                                                                    {item.quantity} x{' '}
                                                                    {numeral(+item.price).format('0,0')} đ
                                                                </p>
                                                            </div>
                                                            <FontAwesomeIcon
                                                                icon={faDeleteLeft}
                                                                className="icon"
                                                                onClick={() => {
                                                                    handleDeleteProduct(item.id, index);
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <div className="tippy-bag-total-price">
                                                    {/* <p>{`Tổng cộng: ${handleTotalProduct(productStorage)} đ`}</p> */}
                                                    <p>
                                                        {t('totallowerCase')}: {handleTotalProduct(productStorage)}{' '}
                                                        <b>đ</b>
                                                    </p>
                                                </div>
                                                <div className="tippy-bag-viewcard">
                                                    <Link to="/shoppingCart">
                                                        <button className="btn">{t('viewcart')}</button>
                                                    </Link>
                                                </div>
                                                <div className="tippy-bag-pay">
                                                    <Link to="/pay">
                                                        <button className="btn">{t('pay')}</button>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="tippy-bag-product">Bạn chưa có sản phẩm</div>
                                        )}
                                    </Wrapper>
                                </div>
                            )}
                        >
                            <div className="header-container-right-item" onClick={visible ? hide : show}>
                                <FontAwesomeIcon icon={faBagShopping} />
                                <div className="header-count">
                                    <span>{productStorage ? productStorage.length : 0}</span>
                                </div>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
            <ModalLogin
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
            />
        </div>
    );
}

export default Header;
