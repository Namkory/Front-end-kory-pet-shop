import './Sidebar.scss';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBarsProgress,
    faBoxes,
    faCartShopping,
    faChartArea,
    faGauge,
    faGears,
    faGift,
    faStore,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [index, setIndex] = useState(0);

    return (
        <div className="main">
            <div className="sidebar_top"></div>
            <div className="sidebar_content">
                <ul>
                    <Link to="/admin">
                        <li
                            className={`sidebar-item ${index === 0 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(0);
                            }}
                        >
                            <FontAwesomeIcon icon={faGauge} className="icon " />
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/admin/customer">
                        <li
                            className={`sidebar-item ${index === 1 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(1);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faAddressCard} className="icon" /> Customers
                        </li>
                    </Link>
                    <Link to="/admin/products">
                        <li
                            className={`sidebar-item ${index === 2 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(2);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faBoxes} className="icon" /> Products
                        </li>
                    </Link>
                    <Link to="/admin/orders">
                        <li
                            className={`sidebar-item ${index === 3 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(3);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faCartShopping} className="icon" /> Orders
                        </li>
                    </Link>
                    <Link to="/admin/analytics">
                        <li
                            className={`sidebar-item ${index === 4 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(4);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faChartArea} className="icon" /> Analytics
                        </li>
                    </Link>
                    <Link to="/admin/categories">
                        <li
                            className={`sidebar-item ${index === 5 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(5);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faBarsProgress} className="icon" /> Categories
                        </li>
                    </Link>
                    <Link to="/admin/discount">
                        <li
                            className={`sidebar-item ${index === 6 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(6);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faGift} className="icon" /> Discount
                        </li>
                    </Link>
                    <Link to="/admin/inventory">
                        <li
                            className={`sidebar-item ${index === 7 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(7);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faStore} className="icon" /> Inventory
                        </li>
                    </Link>
                    <Link to="/admin/settings">
                        <li
                            className={`sidebar-item ${index === 8 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(8);
                            }}
                        >
                            {' '}
                            <FontAwesomeIcon icon={faGears} className="icon" /> Settings
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
