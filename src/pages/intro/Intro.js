import './Intro.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faShieldCat, faShieldDog } from '@fortawesome/free-solid-svg-icons';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';

function Intro() {
    const { t } = useTranslation();
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
                    <p>{t('intro1')}</p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>{t('contact')}</span>
                        </button>
                    </div>
                </div>
                <div className="intro-content-item">
                    <div className="intro-content-item-header">
                        <FontAwesomeIcon icon={faShieldCat} className="icon" />
                    </div>
                    <h3>Kory Shop</h3>
                    <p>{t('intro2')}</p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>{t('contact')}</span>
                        </button>
                    </div>
                </div>
                <div className="intro-content-item">
                    <div className="intro-content-item-header">
                        <FontAwesomeIcon icon={faBone} className="icon" style={{ transform: 'translateX(7%)' }} />
                    </div>
                    <h3>Kory Shop</h3>
                    <p>{t('intro3')}</p>
                    <div className="intro-content-item-btn">
                        <button className="btn">
                            <span>{t('contact')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
