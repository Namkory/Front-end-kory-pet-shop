import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner1">
                        <div className="banner-content">
                            <h4>CHESTER </h4>
                            <h1>IS A CHAMPION DOG.</h1>
                            <h5>be sure to feed him like one</h5>
                            <p>
                                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condim entum a.{' '}
                            </p>
                            <p>Aliquam condimentum mattis neque sed pretium …</p>
                            <Link to="/dog">
                                <button type="button" className="btn">
                                    <span>SHOP NOW</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner2">
                        <div className="banner-content">
                            <h4>OUR STORY</h4>
                            <h1>FOOD FACTORY</h1>
                            <h5>FROM 1989 TO 2015 AND NOW</h5>
                            <p>
                                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condim entum a.
                            </p>
                            <p>Aliquam condimentum mattis neque sed pretium …</p>
                            <Link to="/food">
                                <button type="button" className="btn">
                                    <span>SHOP NOW</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner3">
                        <div className="banner-content">
                            <h4>OUR STORY</h4>
                            <h1>NEW ARRIVALS</h1>
                            <h5>Sales up to 50% off</h5>
                            <p>
                                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condim entum a.{' '}
                            </p>
                            <Link to="/cat">
                                <button type="button" className="btn">
                                    <span>SHOP NOW</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;
