import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
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
import { useState } from 'react';

function App() {
    let [state, setState] = useState(0);

    const render = () => {
        console.log('check render');

        setState(state + 1);
    };
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
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
                        <Route
                            path="pay"
                            element={
                                <Layout>
                                    <Payy />
                                </Layout>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
