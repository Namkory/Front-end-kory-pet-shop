import './Contact.scss';
import images from '../../asset/image';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-left">
                    <div className="contact-left-header">
                        <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                        <div className="contact-left-header-img">
                            <img src={images.bell1} alt="bell" />
                        </div>
                    </div>
                    <div className="contact-left-content">
                        <p>Kory Media là công ty thiết kế website cao cấp có tuổi đời 8+ năm trong ngành.</p>
                        <p>
                            Ngay từ những ngày đầu hoạt động, Kory Media đã chọn cho mình một phân khúc riêng, khác biệt
                            với hàng ngàn công ty thiết kế website trên thị trường: phân khúc của sự hiệu quả.
                        </p>
                        <p>
                            Những website/phần mềm từ Kory Media luôn được tư vấn, phát triển, tối ưu nhằm mang lại hiệu
                            quả rõ rệt cho hoạt động kinh doanh của doanh nghiệp
                        </p>
                    </div>
                    <div className="contact-left-footer">
                        <div className="contact-left-footer-img">
                            <img src={images.bell1} alt="bell" />
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-right-form">
                        <form>
                            <div className="contact-name">
                                <input type="text" placeholder="Họ và tên" />
                            </div>
                            <div className="contact-email">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="contact-phone">
                                <input type="text" placeholder="Số điện thoại" />
                            </div>
                            <textarea rows="4" cols="70" placeholder="Lời nhắn"></textarea>

                            <div className="contact-btn">
                                <button type="submit" className="contact-submit ">
                                    <span>Gửi</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
