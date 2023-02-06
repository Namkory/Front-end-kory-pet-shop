import './Intro.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faShieldCat, faShieldDog } from '@fortawesome/free-solid-svg-icons';

function Intro() {
    return (
        <div className="container">
            <div className="intro-header">
                <h1>KORY MEDIA</h1>
                <div className="intro-header-img">
                    <img src={images.bell} alt="bell" />
                </div>
            </div>
            <div className="intro-content-banner"></div>
            <div className="intro-content grid grid-cols-3 gap-6">
                <div className="intro-content-item">
                    <div className="intro-content-item-header">
                        <FontAwesomeIcon icon={faShieldDog} className="icon" />
                    </div>
                    <h3>Kory Shop</h3>
                    <p>
                        Bạn là người yêu quý động vật,hãy đến Kory shop nơi cung cấp các loại thú nuôi.Với đa dạng vật
                        nuôi rất mong các bạn ghé thăm và tìm kiếm được con vật bạn yêu thích,rất mong được phục vụ quý
                        khách.
                    </p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>Liên Hệ</span>
                        </button>
                    </div>
                </div>
                <div className="intro-content-item">
                    <div className="intro-content-item-header">
                        <FontAwesomeIcon icon={faShieldCat} className="icon" />
                    </div>
                    <h3>Kory Shop</h3>
                    <p>
                        Dịch vụ chăm sóc thú nuôi với tác phong chuyên nghiệp các bạn hoàn toàn có thể yên tâm khi giao
                        vật nuôi của các bạn cho chúng tôi.Chúng tôi rất mong được phục vụ quý khách.
                    </p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>Liên Hệ</span>
                        </button>
                    </div>
                </div>
                <div className="intro-content-item">
                    <div className="intro-content-item-header">
                        <FontAwesomeIcon icon={faBone} className="icon" style={{ transform: 'translateX(7%)' }} />
                    </div>
                    <h3>Kory Shop</h3>
                    <p>
                        Chuyên cung cấp các loại thức ăn cho vật nuôi Với nguyên liệu được lựa chọn kỹ càng, hoàn toàn
                        từ tự nhiên, mang đến những thực phẩm thơm ngon bổ dưỡng cho thú cưng trên toàn thế giới.
                    </p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>Liên Hệ</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
