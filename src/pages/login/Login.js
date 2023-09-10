import './Login.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [state, setState] = useState(0);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/user-login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log('check res', res);
                if (res.data.errCode === 0) {
                    localStorage.setItem('userName', res.data.user.fullName);
                    localStorage.setItem('role', res.data.user.roleId);
                    localStorage.setItem('userId', res.data.user.id);
                    if (res.data.user.roleId === 'admin') {
                        navigate('/admin');
                        setState(state + 1);
                    } else {
                        navigate('/');
                    }
                } else {
                    setErr(res.data.message);
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
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
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="banner1"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="banner2"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="banner3"></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="login-right">
                    <div className="login-right-content">
                        <div className="login-right-content-header">
                            <h1>Sign in</h1>
                        </div>
                        <div className="login-right-content-form">
                            <form>
                                <div className="login-right-content-item">
                                    <p>Email</p>
                                    <input
                                        type="Email"
                                        value={email}
                                        name="Email"
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="login-right-content-item Passwordblock">
                                    <p>Password</p>
                                    <input
                                        type={eye ? 'text' : 'password'}
                                        value={password}
                                        name="password"
                                        placeholder="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <FontAwesomeIcon
                                        icon={eye ? faEye : faEyeSlash}
                                        className="icon"
                                        onClick={() => setEye(!eye)}
                                    />
                                </div>
                                <span style={{ color: 'red', fontSize: '13px' }}>{err}</span>
                                <span className="login-right-content-quenmk">Forgot Password ?</span>
                                <div className="login-right-content-btn">
                                    <button
                                        type="submit"
                                        className="btn-login"
                                        onClick={(e) => {
                                            handleLogin(e);
                                        }}
                                    >
                                        <span>Sign in</span>
                                    </button>
                                    <Link to="/login/register">
                                        <button type="button" className="btn-register">
                                            <span>Sign up</span>
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
