import './Contact.scss';
import images from '../../asset/image';
import '../../language/i18n';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-left">
                    <div className="contact-left-header">
                        <h1>{t('contactus')}</h1>
                        <div className="contact-left-header-img">
                            <img src={images.bell1} alt="bell" />
                        </div>
                    </div>
                    <div className="contact-left-content">
                        <p>{t('contacttext1')}.</p>
                        <p>{t('contacttext2')}.</p>
                        <p>{t('contacttext3')}</p>
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
                                <input type="text" placeholder={t('name')} />
                            </div>
                            <div className="contact-email">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="contact-phone">
                                <input type="text" placeholder={t('sdt')} />
                            </div>
                            <textarea rows="4" cols="70" placeholder={t('note')}></textarea>

                            <div className="contact-btn">
                                <button type="submit" className="contact-submit ">
                                    <span>{t('send')}</span>
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
