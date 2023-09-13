import './Food.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import MultiRangeSlider from 'multi-range-slider-react';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Dog({ render }) {
    const { t } = useTranslation();
    const [foods, setFoods] = useState([]);
    const [minValue, set_minValue] = useState(150000);
    const [maxValue, set_maxValue] = useState(800000);
    const [filterProducts, setFilterProducts] = useState([]);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    useEffect(() => {
        const getAllFoods = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=2`);
            const allFoods = res.data.products;
            setFoods(allFoods);
        };
        getAllFoods();
    }, []);
    useEffect(() => {
        const filteredProducts = foods.filter((product) => product.price >= minValue && product.price <= maxValue);
        setFilterProducts(filteredProducts);
    }, [minValue, maxValue, foods]);

    return (
        <div className="food">
            <div className="food-container">
                <div className="food-left">
                    <div className="food-left-header">
                        <Link to="/">
                            <h1 className="food-left-header-home">{t('home')}</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="food-left-header-food">{t('food')}</h1>
                    </div>
                    <div className="food-left-categoty">
                        <div className="food-left-categoty-title">{t('productportfolio')}</div>
                        <div className="food-left-categoty-content">
                            <Link to="/dog">
                                <p>{t('dog')}</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>{t('cat')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="food-left-range">
                        <div className="food-left-range-title">{t('filterbyprice')}</div>
                        <MultiRangeSlider
                            min={0}
                            max={1000000}
                            step={5}
                            ruler="flase"
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />
                        <div className="food-left-range-btn">
                            <div className="food-left-range-btn-price">
                                {t('price')}:
                                <b>
                                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')}{' '}
                                    <u>đ</u>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="food-right-products-title">{t('productproduct')}</div>
                    <div className="food-right-products">
                        {foods.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="food-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="food-right-products-item-infor">
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
                <div className="food-right grid grid-cols-3 gap-6">
                    {filterProducts.map((item, index) => {
                        return (
                            <div key={index} className="food-right-list-food ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render())}
                                        type="button"
                                        className="btn"
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
