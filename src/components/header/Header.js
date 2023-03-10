import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faDeleteLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Link } from 'react-router-dom';

import './Header.scss';
import images from '../../asset/image';
import Wrapper from '../wrapper/Wrapper';
import ModalLogin from '../Modal/ModalLogin';

function Header() {
    const productStorage = JSON.parse(localStorage.getItem('products'));

    const [state, setState] = useState(0);

    const [active, setActive] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const toggle = () => {
        setOpenModal(!openModal);
    };

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

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

            return total;
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
                                GI???I THI???U
                            </div>
                        </Link>
                        <Link to="/dog">
                            <div
                                className={`header-container-mid-menu-item ${active === 2 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                CH?? C???NH
                            </div>
                        </Link>
                        <Link to="/cat">
                            <div
                                className={`header-container-mid-menu-item ${active === 3 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(3);
                                }}
                            >
                                M??O C???NH
                            </div>
                        </Link>
                        <Link to="/food">
                            <div
                                className={`header-container-mid-menu-item ${active === 4 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(4);
                                }}
                            >
                                ????? ??N
                            </div>
                        </Link>
                        <Link to="/accessory">
                            <div
                                className={`header-container-mid-menu-item ${active === 5 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(5);
                                }}
                            >
                                PH??? KI???N
                            </div>
                        </Link>
                        <Link to="/news">
                            <div
                                className={`header-container-mid-menu-item ${active === 6 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(6);
                                }}
                            >
                                TIN T???C
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div
                                className={`header-container-mid-menu-item ${active === 7 ? 'active' : null}`}
                                onClick={() => {
                                    setActive(7);
                                }}
                            >
                                LI??N H???
                            </div>
                        </Link>
                    </div>
                    <div className="header-container-right">
                        <div className="header-container-right-item">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>

                        <div
                            className="header-container-right-item i1"
                            onClick={() => {
                                toggle();
                            }}
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </div>

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
                                                                    {item.quantity} x {item.price} ??
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
                                                    <p>{`T???ng c???ng: ${handleTotalProduct(productStorage)} ??`}</p>
                                                </div>

                                                <div className="tippy-bag-viewcard">
                                                    <Link to="/shoppingCart">
                                                        <button className="btn">XEM GI??? H??NG</button>
                                                    </Link>
                                                </div>
                                                <div className="tippy-bag-pay">
                                                    <Link to="/pay">
                                                        <button className="btn">THANH TO??N</button>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="tippy-bag-product">B???n ch??a c?? s???n ph???m</div>
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
