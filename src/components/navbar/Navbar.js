import React from 'react';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBell,
    faBoxOpen,
    faCartShopping,
    faCheckCircle,
    faCircle,
    faGear,
    faHippo,
    faPalette,
    faSearch,
    faTriangleExclamation,
    faTruckFast,
    faUser,
    faWallet,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import image from '../../asset/image';
import Wrapper from '../wrapper/Wrapper';
function Navbar() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const [visible1, setVisible1] = useState(false);
    const show1 = () => setVisible1(true);
    const hide1 = () => setVisible1(false);
    const [visible2, setVisible2] = useState(false);
    const show2 = () => setVisible2(true);
    const hide2 = () => setVisible2(false);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [state, setState] = useState(0);
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        navigate('/login');
        setState(state + 1);
    };

    return (
        <div className="navbar">
            <div className="nav-input">
                <input type="text" placeholder="Search here..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="nav-right">
                <Tippy
                    interactive
                    visible={visible}
                    onClickOutside={hide}
                    render={(attrs) => (
                        <div className="tippy-infor" tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <ul>
                                    <li className="menu-infor">
                                        <FontAwesomeIcon icon={faUser} className="menu-infor-icon" />
                                        <span>Profile</span>
                                    </li>
                                    <li className="menu-infor">
                                        <FontAwesomeIcon icon={faWallet} className="menu-infor-icon" />
                                        <span>My Wallet</span>
                                    </li>
                                    <li className="menu-infor">
                                        <FontAwesomeIcon icon={faGear} className="menu-infor-icon" />
                                        <span>Settings</span>
                                    </li>
                                    <li className="menu-infor" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="menu-infor-icon" />
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            </Wrapper>
                        </div>
                    )}
                >
                    <div className="nav-infor" onClick={visible ? hide : show}>
                        <img src={image.avataradmin} alt="avatar" className="avatar" />
                        <span className="text">Nam kory</span>
                    </div>
                </Tippy>
                <Tippy
                    interactive
                    visible={visible1}
                    placement="bottom-start"
                    onClickOutside={hide1}
                    render={(attrs) => (
                        <div className="tippy-bell" tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <ul>
                                    <li className="menu-bell">
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="menu-infor-icon" />
                                        <span>Curabitur id eros quis nunc suscipit blandit</span>
                                    </li>
                                    <li className="menu-bell">
                                        <FontAwesomeIcon icon={faBoxOpen} className="menu-infor-icon" />
                                        <span>Duis malesuada justo eu sapien elementum, in semper diam posuere</span>
                                    </li>
                                    <li className="menu-bell">
                                        <FontAwesomeIcon icon={faCartShopping} className="menu-infor-icon" />
                                        <span>Donec at nisi sit amet tortor commodo porttitor pretium a erat</span>
                                    </li>
                                    <li className="menu-bell">
                                        <FontAwesomeIcon icon={faTruckFast} className="menu-infor-icon" />
                                        <span>In gravida mauris et nisi</span>
                                    </li>
                                    <li className="menu-bell">
                                        <FontAwesomeIcon icon={faHippo} className="menu-infor-icon" />
                                        <span>Curabitur id eros quis nunc suscipit blandit</span>
                                    </li>
                                    <li className="menu-bell-footer">View All</li>
                                </ul>
                            </Wrapper>
                        </div>
                    )}
                >
                    <div onClick={visible1 ? hide1 : show1}>
                        <FontAwesomeIcon icon={faBell} className="search-icon bell" />
                    </div>
                </Tippy>
                <Tippy
                    interactive
                    visible={visible2}
                    onClickOutside={hide2}
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className="tippy-theme" tabIndex="-1" {...attrs}>
                            <div className="theme-header">
                                <h4>Theme settings</h4>
                                <FontAwesomeIcon icon={faXmark} className="theme-close" onClick={hide2} />
                            </div>
                            <div className="theme-mode">
                                <span>Choose mode</span>
                                <ul>
                                    <li
                                        className="mode-item"
                                        onClick={() => {
                                            setCheck(!check);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={check === false ? faCircle : faCheckCircle}
                                            className={`icon ${check === false ? 'light' : null}`}
                                        />
                                        <span>Light</span>
                                    </li>
                                    <li
                                        className="mode-item"
                                        onClick={() => {
                                            setCheck1(!check1);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={check1 === false ? faCircle : faCheckCircle}
                                            className={`icon ${check === true ? 'dark' : null}`}
                                        />
                                        <span>Dark</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                >
                    <div onClick={visible1 ? hide2 : show2}>
                        <FontAwesomeIcon icon={faPalette} className="search-icon" />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default Navbar;
