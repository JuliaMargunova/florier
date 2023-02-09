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


const App = () => {
  //  console.log("answer ", productsAPI.getProducts());



    return (
        <div className="container-new">
            <div className="page">
                <div>
                    <Header />
                    <Navigation />
                    <BreadcrumbList />
                    
                    {/* <Reviews /> */}
                    <Products/>
                
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;