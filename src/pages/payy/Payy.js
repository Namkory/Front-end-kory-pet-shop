import NoProduct from '../noProduct/NoProduct';
import './Payy.scss';

function Payy() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    console.log('check productstorage', productStorage);

    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        return sum;
    };

    const handleTotalProduct = (data) => {
        const arr = [];

        if (data && data.length > 0) {
            data.forEach((item) => {
                arr.push(item.price * item.quantity);
            });

            const total = arr.reduce((a, b) => {
                return a + b;
            });

            return total;
        }
    };

    return (
        <>
            {productStorage && productStorage.length > 0 ? (
                <div className="pay">
                    <div className="pay-container">
                        <div className="pay-container-left">
                            <h1>THÔNG TIN THANH TOÁN</h1>
                            <form>
                                <div className="pay-container-left-fullName">
                                    <div className="pay-container-left-firstName">
                                        <p>Họ*</p>
                                        <input type="text" />
                                    </div>

                                    <div className="pay-container-left-lastName">
                                        <p>Tên*</p>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Địa chỉ*</p>
                                    <input type="text" />
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Thành phố*</p>
                                    <input type="text" />
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Mã vùng*</p>
                                    <input type="text" />
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Số điện thoại*</p>
                                    <input type="text" />
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Địa chỉ email*</p>
                                    <input type="text" />
                                </div>

                                <div className="pay-container-left-item">
                                    <p>Ghi chú đơn hàng*</p>
                                    <textarea
                                        rows="20"
                                        type="text"
                                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="pay-container-right">
                            <div className="pay-container-right-inner">
                                <h1>ĐƠN HÀNG CỦA BẠN </h1>
                                <div className="pay-container-right-inner-productTotal">
                                    <p>SẢN PHẨM</p>
                                    <p>
                                        <b>TỔNG CỘNG</b>
                                    </p>
                                </div>

                                {productStorage.map((item, index) => {
                                    return (
                                        <div key={index} className="pay-container-right-inner-product">
                                            <p>
                                                {item.name} × {item.quantity}
                                            </p>
                                            <h5>
                                                <b>{` ${handleTotalPrice1Item(item.quantity, item.price)} đ`}</b>
                                            </h5>
                                        </div>
                                    );
                                })}

                                <div className="pay-container-right-inner-total">
                                    <p>Tổng cộng</p>
                                    <h5>
                                        <b>{handleTotalProduct(productStorage)} đ</b>
                                    </h5>
                                </div>
                                <div className="pay-container-right-inner-total">
                                    <p>Giao hàng</p>
                                    <span>Giao hàng miễn phí</span>
                                </div>
                                <p className="pay-container-right-inner-text">
                                    Cảm ơn quý khách đã tin tưởng và ủng hộ kory shop. Kính chúc quý khách có một ngày
                                    tốt lành. Nếu cần tư vấn bất kì điều gì xin hãy liên hệ với chúng tôi.
                                </p>
                                <div className="pay-container-right-inner-order">
                                    <p>ĐẶT HÀNG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoProduct />
            )}
        </>
    );
}

export default Payy;
