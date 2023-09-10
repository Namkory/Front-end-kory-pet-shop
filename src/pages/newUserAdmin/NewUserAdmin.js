import './NewUserAdmin.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function NewUserAdmin() {
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('user');
    console.log('check role', role);
    const [errMessage, setErrMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrMessage('');
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/create-user`, {
                fullName: fullName,
                email: email,
                password: password,
                phone: phone,
                address: address,
                roleId: role,
            })
            .then((res) => {
                const result = res.data;
                console.log('check', result);
                if (result.errCode === 0) {
                    navigate('/admin/customer');
                } else {
                    setErrMessage(result.errMessage);
                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        if (id) {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/getall-user?id=${id}`)
                .then((res) => {
                    const result = res.data;
                    if (result.errCode === 0) {
                        setFullName(result.users.fullName);
                        setEmail(result.users.email);
                        setPhone(result.users.phone);
                        setAddress(result.users.address);
                        setRole(result.users.roleId);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            setFullName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setRole('');
        }
    }, [id]);
    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`${process.env.REACT_APP_BACKEND_URL}/edit-user`, {
                id: id,
                fullName: fullName,
                email: email,
                phone: phone,
                address: address,
                roleId: role,
            })
            .then((res) => {
                const result = res.data;
                if (result.errCode === 0) {
                    navigate('/admin/customer');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="newuser">
            <div className="newuser-header">
                <h1 className="text-slate-500">{id ? 'Edit user' : 'Add New user'}</h1>
            </div>
            {errMessage !== '' ? (
                <div className="err">
                    <h1>{errMessage}</h1>
                </div>
            ) : (
                ''
            )}
            <div className="newuser-content">
                <div className="newuser-content-right">
                    <form className="grid grid-cols-2 gap-8">
                        <div className="form-input">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                                required="required"
                            />
                        </div>
                        <div className="form-input">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                            />
                        </div>
                        {!id ? (
                            <div className="form-input">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="form-input">
                            <label>Phone</label>
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label>Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-input">
                            <label>Role</label>
                            <br />
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {id ? (
                            <button
                                onClick={(e) => {
                                    handleUpdate(e);
                                }}
                                className="btn"
                                type="submit"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                className="btn"
                                type="submit"
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                Create
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewUserAdmin;
