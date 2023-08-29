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

function Dog({ render }) {
    const [dogs, setDogs] = useState([]);
    const { t } = useTranslation();
    const [minValue, set_minValue] = useState(100000);
    const [maxValue, set_maxValue] = useState(10000000);
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
                        <div className="dog-left-range-title">LỌC THEO GIÁ</div>
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
                        <div className="dog-left-range-btn">
                            <div className="dog-left-range-btn-filter">
                                <p>Lọc</p>
                            </div>
                            <div className="dog-left-range-btn-price">
                                Giá:{' '}
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
                    {dogs.map((item, index) => {
                        return (
                            <div key={index} className="dog-right-list-dog ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleAddProduct(item, render())}
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
