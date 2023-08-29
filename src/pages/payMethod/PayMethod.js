import './PayMethod.scss';
import images from '../../asset/image';
import numeral from 'numeral';
import { useTranslation } from 'react-i18next';

function PayMethod() {
    const { t } = useTranslation();
    let payMethod = localStorage.getItem('pay_method');
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const handleTotalProduct = (data) => {
        const arr = [];
        if (data && data.length > 0) {
            data.forEach((item) => {
                arr.push(item.price * item.quantity);
            });
            const total = arr.reduce((a, b) => {
                return a + b;
            });
            const formattedTotal = numeral(total).format('0,0');
            return formattedTotal;
        }
    };
    // Tạo một số ngẫu nhiên có giá trị từ 0 đến 9999
    const randomNumber = Math.floor(Math.random() * 10000);
    // Đảm bảo số có đủ 4 chữ số bằng cách thêm các số 0 ở đầu nếu cần
    const randomFourDigitNumber = String(randomNumber).padStart(4, '0');
    // Tạo một đối tượng Date đại diện cho thời điểm hiện tại
    const currentDate = new Date();
    // Lấy thông tin ngày, tháng và năm
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return (
        <div className="payMethod">
            <div className="container">
                <div className="header">
                    <h1>{t('complete')}</h1>
                </div>
                <div className="content">
                    {payMethod === 'momo' ? (
                        <div className="left">
                            <h1>Quét mã để thanh toán</h1>
                            <img src={images.logo_momo} alt="logo Momo" className="left-logo-momo" />
                            <div className="left-infor">
                                <p>
                                    Người nhận: <b>Nguyễn Hoài Nam</b>
                                </p>
                                <p>
                                    Số điện thoại: <b>0909360314</b>
                                </p>
                                <p>Số tiền: {handleTotalProduct(productStorage)} VND</p>
                                <p>
                                    Ghi chú chuyển tiền bạn ghi mã đơn hàng: <b>KORYPET {randomFourDigitNumber}</b>
                                </p>
                            </div>
                            <img src={images.qr_momo} alt="QR Momo" class="qr_momo" />
                            <div className="left-qr-momo-text">
                                <img
                                    src={images.icon_qr_scan}
                                    alt="Icon QR Scan"
                                    className="left-qr-momo-text-QR-Scan"
                                />
                                <p>Sử dụng App Momo để quét mã.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="left">
                            <h1>Quét mã để thanh toán</h1>
                            <img src={images.logo_vietcombank} alt="logo Vietcombank" className="left-logo-momo" />
                            <div className="left-infor">
                                <p>
                                    Người nhận: <b>Nguyễn Hoài Nam</b>
                                </p>
                                <p>
                                    Số điện thoại: <b>0909360314</b>
                                </p>
                                <p>
                                    Số tiền: <b>{handleTotalProduct(productStorage)} VND</b>
                                </p>
                                <p>
                                    Ghi chú chuyển tiền bạn ghi mã đơn hàng: <b>KORYPET {randomFourDigitNumber}</b>
                                </p>
                            </div>
                            <img src={images.qr_vietcombank} alt="QR Vietcombank" class="qr_momo" />
                            <div className="left-qr-momo-text">
                                <img
                                    src={images.icon_qr_scan}
                                    alt="Icon QR Scan"
                                    className="left-qr-momo-text-QR-Scan"
                                />
                                <p>Sử dụng App Vietcombank để quét mã.</p>
                            </div>
                        </div>
                    )}
                    <div className="right">
                        <div className="right-container">
                            <div className="right-content">
                                <h1>
                                    <b>Cảm ơn bạn! Đơn hàng của bạn đã được nhận.</b>
                                </h1>
                                <ul>
                                    <li>
                                        Mã đơn hàng: <b>KORYPET {randomFourDigitNumber}</b>
                                    </li>
                                    <li>
                                        Ngày: <b>{`${day} tháng ${month} năm ${year}`}</b>
                                    </li>
                                    <li>
                                        Tổng cộng: <b>{handleTotalProduct(productStorage)} VND</b>
                                    </li>
                                    <li>
                                        Phương thức thanh toán:{' '}
                                        <strong>{payMethod === 'vietcombank' ? 'Vietcombank' : 'Quét mã Momo'}</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayMethod;
