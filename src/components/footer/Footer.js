import './Footer.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-top">footer top</div>
            <div className="Footer-wrapper-mid">
                <div className="footer-mid">
                    <div className="footer-mid-directional">
                        <h3>ĐIỀU HƯỚNG</h3>
                        <ul>
                            <li>Trang chủ</li>
                            <li>Về chúng tôi</li>
                            <li>Sản phẩm</li>
                            <li>Điểm tin hữu ích</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                    <div className="footer-mid-email">
                        <div className="logo-footer"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet ....
                        </p>
                        <div className="input-submit">
                            <input type="email" placeholder="Email" />
                            <button type="button" className="footer-btn">
                                Gửi{' '}
                            </button>
                        </div>
                    </div>
                    <div className="footer-mid-contact">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                                <span>319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <span>0126 922 0162</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <span>kory@gmail.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSkype} className="icon" />
                                <span>demonhunterp</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © All rights reserved. Thiết kế website
                <img src={images.noImage1} alt="logoFooter" className="logoFooter" />
                kory Media
            </div>
        </div>
    );
}

export default Footer;
