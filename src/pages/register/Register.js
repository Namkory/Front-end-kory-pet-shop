import { useState } from 'react';
import './Register.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/create-user`, {
                fullName: fullName,
                email: email,
                password: password,
                phone: phone,
                address: address,
                roleId: 'user',
            })
            .then((res) => {
                const result = res.data;
                if (result.errCode === 0) {
                    navigate('/login');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="register-background">
            <div className="register-container">
                <div className="text-center">
                    <h1 className="register-title">Sign Up</h1>
                </div>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="fullname"
                            >
                                FULL Name*
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="fullname"
                                value={fullName}
                                type="text"
                                placeholder="kory"
                                required
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                EMAIL*
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                value={email}
                                type="text"
                                placeholder="Doe"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                            >
                                Password*
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                value={password}
                                type="password"
                                placeholder="******************"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                            >
                                ADDRESS*
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="text"
                                value={address}
                                required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                placeholder="Your address"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                            >
                                PHONE NUMBER*
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="number"
                                value={phone}
                                placeholder="+84"
                                required
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-state"
                            >
                                SEX
                            </label>
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-2/3 mt-2">
                            <button
                                class="shadow bg-blue-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
