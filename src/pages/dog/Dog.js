import './Dog.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import MultiRangeSlider from 'multi-range-slider-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Dog({ render }) {
    const { t } = useTranslation();
    const [dogs, setDogs] = useState([]);
    const [minValue, set_minValue] = useState(1000000);
    const [maxValue, set_maxValue] = useState(15000000);
    const [filterProducts, setFilterProducts] = useState([]);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    useEffect(() => {
        const getAllDogs = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=0`);
            const allDogs = res.data.products;
            setDogs(allDogs);
        };
        getAllDogs();
    }, []);
    useEffect(() => {
        const filteredProducts = dogs.filter((product) => product.price >= minValue && product.price <= maxValue);
        setFilterProducts(filteredProducts);
    }, [minValue, maxValue, dogs]);

    return (
        <div className="dog">
            <div className="dog-container">
                <div className="dog-left">
                    <div className="dog-left-header">
                        <Link to="/">
                            <h1 className="dog-left-header-home">{t('home')}</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="dog-left-header-dog">{t('dog')}</h1>
                    </div>
                    <div className="dog-left-categoty">
                        <div className="dog-left-categoty-title">{t('productportfolio')}</div>
                        <div className="dog-left-categoty-content">
                            <Link to="/dog">
                                <p>{t('dog')}</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>{t('cat')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dog-left-range">
                        <div className="dog-left-range-title">{t('filterbyprice')}</div>
                        <MultiRangeSlider
                            min={0}
                            max={15000000}
                            step={5}
                            ruler="flase"
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />
                        <div className="dog-left-range-btn">
                            <div className="dog-left-range-btn-price">
                                {t('price')}:
                                <b>
                                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')}{' '}
                                    <u>đ</u>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="dog-right-products-title">{t('productproduct')}</div>
                    <div className="dog-right-products">
                        {dogs.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="dog-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="dog-right-products-item-infor">
                                        <p>{item.title}</p>
                                        <p>
                                            <b>
                                                {numeral(+item.price).format('0,0')}
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
                    {filterProducts.map((item, index) => {
                        return (
                            <div key={index} className="dog-right-list-dog ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleAddProduct(item, render())}
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/productDetail">
                                        <button
                                            onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                                        </button>
                                    </Link>
                                </div>
                                <span>Chó cảnh</span>
                                <h1>{item.title}</h1>
                                <p>
                                    {numeral(+item.price).format('0,0')}
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
