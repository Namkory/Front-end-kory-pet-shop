import './Accessory.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import MultiRangeSlider from 'multi-range-slider-react';

function Accessory({ render }) {
    const { t } = useTranslation();
    const [accessorys, setAccessorys] = useState([]);
    const [minValue, set_minValue] = useState(100000);
    const [maxValue, set_maxValue] = useState(3000000);
    const [filterProducts, setFilterProducts] = useState([]);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    useEffect(() => {
        const getAllAccessorys = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=3`);
            const allAccessorys = res.data.products;
            setAccessorys(allAccessorys);
        };
        getAllAccessorys();
    }, []);
    useEffect(() => {
        const filteredProducts = accessorys.filter((product) => product.price >= minValue && product.price <= maxValue);
        setFilterProducts(filteredProducts);
    }, [minValue, maxValue, accessorys]);

    return (
        <div className="accessory">
            <div className="accessory-container">
                <div className="accessory-left">
                    <div className="accessory-left-header">
                        <Link to="/">
                            <h1 className="accessory-left-header-home">{t('home')}</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="accessory-left-header-accessory">{t('accessory')}</h1>
                    </div>
                    <div className="accessory-left-categoty">
                        <div className="accessory-left-categoty-title">{t('productportfolio')}</div>
                        <div className="accessory-left-categoty-content">
                            <Link to="/accessory">
                                <p>{t('dog')}</p>
                            </Link>
                            <span></span>
                            <Link to="/cat">
                                <p>{t('cat')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="accessory-left-range">
                        <div className="accessory-left-range-title">{t('filterbyprice')}</div>
                        <MultiRangeSlider
                            min={0}
                            max={5000000}
                            step={5}
                            ruler="flase"
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />
                        <div className="accessory-left-range-btn">
                            <div className="accessory-left-range-btn-price">
                                {t('price')}:
                                <b>
                                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')}{' '}
                                    <u>đ</u>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="accessory-right-products-title">{t('productproduct')}</div>
                    <div className="accessory-right-products">
                        {accessorys.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className="accessory-right-products-item">
                                    <img src={item.thumbnail} alt="avatar product" className="avatar" />
                                    <div className="accessory-right-products-item-infor">
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
                <div className="accessory-right grid grid-cols-3 gap-6">
                    {filterProducts.map((item, index) => {
                        return (
                            <div key={index} className="accessory-right-list-accessory ">
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
                                <span>Phụ kiện</span>
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

export default Accessory;
