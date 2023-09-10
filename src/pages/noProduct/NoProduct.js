import { Link } from 'react-router-dom';
import './NoProduct.scss';

function NoProduct() {
    return (
        <div className="noProduct">
            <div className="noProduct-container">
                <div className="noProduct-container-inner">
                    <p>Chưa có sản phẩm trong giỏ hàng</p>
                    <Link to="/">
                        <div className="noProduct-container-btn">
                            <p>QUAY LẠI CỬA HÀNG</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NoProduct;
