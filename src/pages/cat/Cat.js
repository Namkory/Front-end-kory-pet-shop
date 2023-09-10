import './Cat.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import MultiRangeSlider from 'multi-range-slider-react';

function Cat({ render }) {
    const { t } = useTranslation();
    const [cats, setCats] = useState([]);
    const [minValue, set_minValue] = useState(2000000);
    const [maxValue, set_maxValue] = useState(8000000);
    const [filterProducts, setFilterProducts] = useState([]);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    useEffect(() => {
        const getAllCats = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=1`);
            const allCats = res.data.products;
            setCats(allCats);
        };
        getAllCats();
    }, []);
    useEffect(() => {
        const filteredProducts = cats.filter((product) => product.price >= minValue && product.price <= maxValue);
        setFilterProducts(filteredProducts);
    }, [minValue, maxValue, cats]);

    return (
        <div className="cat">
            <div className="cat-container">
                <div className="cat-left">
                    <div className="cat-left-header">
                        <Link to="/">
                            <h1 className="cat-left-header-home">{t('home')}</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="cat-left-header-cat">{t('cat')}</h1>
                    </div>
                    <div className="cat-left-categoty">
                        <div className="cat-left-categoty-title">{t('productportfolio')}</div>
                        <div className="cat-left-categoty-content">
                            <Link to="/dog">
                                <p>{t('dog')}</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>{t('cat')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="cat-left-range">
                        <div className="cat-left-range-title">{t('filterbyprice')}</div>
                        <MultiRangeSlider
                            min={0}
                            max={10000000}
                            step={5}
                            ruler="flase"
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />
                        <div className="cat-left-range-btn">
                            <div className="cat-left-range-btn-price">
                                {t('price')}:
                                <b>
                                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')}{' '}
                                    <u>đ</u>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="cat-right-products-title">{t('productproduct')}</div>
                    <div className="cat-right-products">
                        {cats.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="cat-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="cat-right-products-item-infor">
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
                <div className="cat-right grid grid-cols-3 gap-6">
                    {filterProducts.map((item, index) => {
                        return (
                            <div key={index} className="cat-right-list-cat ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render())}
                                        type="button"
                                        className="btn"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/productDetail">
                                        <button
                                            onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </div>
                                <span>Mèo cảnh</span>
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

export default Cat;
