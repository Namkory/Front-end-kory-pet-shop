import './Home.scss';
import { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleInfo,
    faGift,
    faPiggyBank,
    faRocket,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import images from '../../asset/image';
import axios from 'axios';
import { handleAddProduct } from '../../util';
import { handleGetDetail } from '../../util';
import { Link } from 'react-router-dom';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';

function Home({ render }) {
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [foods, setFoods] = useState([]);
    const { t } = useTranslation();
    useEffect(() => {
        const getDogProducts = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=0`);
            if (res.data.errCode === 0) {
                setDogs(res.data.products);
            } else {
                alert(res.data.errMessage);
            }
        };
        getDogProducts();
    }, []);
    useEffect(() => {
        const getCatProducts = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=1`);
            if (res.data.errCode === 0) {
                setCats(res.data.products);
            } else {
                alert(res.data.errMessage);
            }
        };
        getCatProducts();
    }, []);
    useEffect(() => {
        const getFoodProducts = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=2`);
            if (res.data.errCode === 0) {
                setFoods(res.data.products);
            } else {
                alert(res.data.errMessage);
            }
        };
        getFoodProducts();
    }, []);

    return (
        <div className="home">
            <Banner />
            <div className="pay">
                <div className="container">
                    <div className="pay-item">
                        <FontAwesomeIcon icon={faRocket} className="icon" />
                        <div className="infor">
                            <h1>{t('freeshipping')}</h1>
                            <p>{t('allordersover')} $150</p>
                        </div>
                    </div>
                    <div className="pay-item">
                        <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                        <div className="infor">
                            <h1>15% {t('discount')}</h1>
                            <p>{t('forfirstorder')}</p>
                        </div>
                    </div>
                    <div className="pay-item">
                        <FontAwesomeIcon icon={faWallet} className="icon" />
                        <div className="infor">
                            <h1>{t('securepayment')}</h1>
                            <p>{t('confirmed')}</p>
                        </div>
                    </div>
                    <div className="pay-item">
                        <FontAwesomeIcon icon={faGift} className="icon" />
                        <div className="infor">
                            <h1>{t('awesomegift')}</h1>
                            <p>{t('everymonth')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-dog">
                <div className="home-dog-header">
                    <h1>{t('dog')}</h1>
                    <div className="home-dog-header-img">
                        <img src={images.bell} alt="bell" />
                    </div>
                </div>
                <div className="home-dog-content grid grid-cols-4 grid-rows-2 gap-6  ">
                    {dogs.slice(0, 8).map((item, index) => {
                        return (
                            <div key={index} className="list-dog ">
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
                <Link to="/dog">
                    <div className="home-dog-footer">
                        <button className="btn">
                            <span>{t('seemore')}</span>
                        </button>
                    </div>
                </Link>
            </div>
            <div className="bannerdog4"></div>
            <div className="home-cat">
                <div className="home-cat-header">
                    <h1>{t('cat')}</h1>
                    <div className="home-cat-header-img">
                        <img src={images.bell} alt="bell" />
                    </div>
                </div>
                <div className="home-cat-content grid grid-cols-4 grid-rows-2 gap-6  ">
                    {cats.slice(0, 8).map((item, index) => {
                        return (
                            <div key={index} className="list-cat ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button onClick={() => handleAddProduct(item)} type="button" className="btn">
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
                <Link to="/cat">
                    <div className="home-cat-footer">
                        <button className="btn">
                            <span>{t('seemore')}</span>
                        </button>
                    </div>
                </Link>
            </div>
            <div className="bannerdog5 grid grid-cols-2 ">
                <div className="bannerdog5-left"></div>
                <div className="bannerdog5-right "></div>
            </div>
            <div className="home-food">
                <div className="home-food-header">
                    <h1>{t('food')}</h1>
                    <div className="home-food-header-img">
                        <img src={images.bell} alt="bell" />
                    </div>
                </div>
                <div className="home-food-content grid grid-cols-4 grid-rows-2 gap-6  ">
                    {foods.slice(0, 8).map((item, index) => {
                        return (
                            <div key={index} className="list-food ">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="btn-add">
                                    <button onClick={() => handleAddProduct(item)} type="button" className="btn">
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
                <Link to="/food">
                    <div className="home-food-footer">
                        <button className="btn">
                            <span>{t('seemore')}</span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
