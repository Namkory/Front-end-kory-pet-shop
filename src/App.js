import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './layout/Layout';
import LayoutAdmin from './layoutAdmin/layoutAdmin';
import Home from './pages/home/Home';
import Intro from './pages/intro/Intro';
import Dog from './pages/dog/Dog';
import Cat from './pages/cat/Cat';
import Food from './pages/food/Food';
import Accessory from './pages/accessory/Accessory';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import ProductDetail from './pages/productDetail/ProductDetail';
import Payy from './pages/payy/Payy';
import PayMethod from './pages/payMethod/PayMethod';
import PayMethod2 from './pages/payMethod2/PayMethod2';
import Dashboard from './pages/dashboard/Dashboard';
import ProductsAdmin from './pages/productsAdmin/ProductsAdmin';
import NewProductAdmin from './pages/newProductAdmin/NewProductAdmin';
import Customers from './pages/customers/Customers';
import Order from './pages/order/Order';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NewUserAdmin from './pages/newUserAdmin/NewUserAdmin';
import OrderDetail from './pages/orderDetail/OrderDetail';

function App() {
    let [state, setState] = useState(0);
    const render = () => {
        setState(state + 1);
    };
    let roleAdmin = localStorage.getItem('role');
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* URL User Page */}
                    <Route path="/">
                        <Route
                            index
                            element={
                                <Layout>
                                    <Home render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="intro"
                            element={
                                <Layout>
                                    <Intro />
                                </Layout>
                            }
                        />
                        <Route path="login">
                            <Route index element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route
                            path="dog"
                            element={
                                <Layout>
                                    <Dog render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="cat"
                            element={
                                <Layout>
                                    <Cat render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="food"
                            element={
                                <Layout>
                                    <Food render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="accessory"
                            element={
                                <Layout>
                                    <Accessory render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="news"
                            element={
                                <Layout>
                                    <News />
                                </Layout>
                            }
                        />
                        <Route
                            path="contact"
                            element={
                                <Layout>
                                    <Contact />
                                </Layout>
                            }
                        />
                        <Route
                            path="shoppingCart"
                            element={
                                <Layout>
                                    <ShoppingCart render={() => render()} />
                                </Layout>
                            }
                        />
                        <Route
                            path="productDetail"
                            element={
                                <Layout>
                                    <ProductDetail />
                                </Layout>
                            }
                        />
                        <Route path="pay">
                            <Route
                                index
                                element={
                                    <Layout>
                                        <Payy />
                                    </Layout>
                                }
                            />
                            <Route
                                path="payMethod"
                                element={
                                    <Layout>
                                        <PayMethod />
                                    </Layout>
                                }
                            />
                            <Route
                                path="payMethod2"
                                element={
                                    <Layout>
                                        <PayMethod2 />
                                    </Layout>
                                }
                            />
                        </Route>
                    </Route>
                    {/* URL admin Page */}
                    <Route path={roleAdmin === 'admin' ? 'admin' : ''}>
                        <Route
                            index
                            element={
                                <LayoutAdmin>
                                    <Dashboard />
                                </LayoutAdmin>
                            }
                        />
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <ProductsAdmin />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <LayoutAdmin>
                                        <NewProductAdmin />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="edit-product/:id"
                                element={
                                    <LayoutAdmin>
                                        <NewProductAdmin />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                        <Route path="customer">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <Customers />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="newuser"
                                element={
                                    <LayoutAdmin>
                                        <NewUserAdmin />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="edit-user/:id"
                                element={
                                    <LayoutAdmin>
                                        <NewUserAdmin />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                        <Route path="orders">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <Order />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="order-detail/:id"
                                element={
                                    <LayoutAdmin>
                                        <OrderDetail />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
