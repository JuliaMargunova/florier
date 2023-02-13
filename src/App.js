import React from 'react';
import './styles/App.css';
import { productsAPI } from './API/api';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import BreadcrumbList from './components/BreadcrumbList/BreadcrumbList';
import Reviews from './pages/Reviews/Reviews';
import icon from './styles/new-images/all_payment_logo_transparent.png';

import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import { Routes, Route } from 'react-router-dom';


const App = () => {
    //  console.log("answer ", productsAPI.getProducts());



    return (
        <div className="container-new">
            <div className="page">
                <div>
                    <Header />
                    <Navigation />
                    <BreadcrumbList />

                    <div id="content">
                        <Routes>
                            <Route exact path="/catalog" element={<Products />} />
                            <Route path="/reviews" element={<Reviews />} />
                            <Route path="/productInfo" element={<ProductInfo />} />
                            {/* <Route path="*" element={<Products />} /> */}
                        </Routes>
                      
                    </div>


                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;