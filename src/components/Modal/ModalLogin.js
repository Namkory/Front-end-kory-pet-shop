import './ModalLogin.scss';
import { useState } from 'react';

function ModalLogin({ open, onClose }) {
    const [openRegister, setOpenRegister] = useState(false);
    if (!open) return null;
    return (
        <div className="modal" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal-container-inner">
                    {!openRegister ? (
                        <form>
                            <h1>ĐĂNG NHẬP</h1>
                            <p>Tên tài khoản hoặc địa chỉ email*</p>
                            <div className="modal-email">
                                <input type="text" />
                            </div>
                            <p>Mật khẩu*</p>
                            <div className="modal-password">
                                <input type="text" />
                            </div>
                            <div className="modal-btn-login">
                                <div className="modal-btn">
                                    <button className="btn">ĐĂNG NHẬP</button>
                                </div>
                                <div
                                    className="modal-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenRegister(true);
                                    }}
                                >
                                    <button className="btn">ĐĂNG KÝ</button>
                                </div>
                            </div>
                            <span>Quên mật khẩu ?</span>
                        </form>
                    ) : (
                        <form>
                            <h1>ĐĂNG KÝ</h1>
                            <p>Tên tài khoản hoặc địa chỉ email*</p>
                            <div className="modal-email">
                                <input type="text" />
                            </div>
                            <p>Mật khẩu*</p>
                            <div className="modal-password">
                                <input type="text" />
                            </div>
                            <div className="modal-btn-login">
                                <div className="modal-btn">
                                    <button className="btn">ĐĂNG KÝ</button>
                                </div>
                                <div
                                    className="modal-btn"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        setOpenRegister(false);
                                    }}
                                >
                                    <button className="btn">TRỞ LẠI</button>
                                </div>
                            </div>
                            <span>Quên mật khẩu ?</span>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
