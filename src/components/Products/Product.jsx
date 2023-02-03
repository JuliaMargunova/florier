import React from 'react';
import { productsAPI } from './API/api';
import deliver from '../../styles/new-images/deliver.png';
import cash from '../../styles/new-images/catalog/payment-options/card.svg';
import shop from '../../styles/new-images/shop.png';

const Product = () => {
    console.log("answer ", productsAPI.getProducts());
    return (
        <ul>
            <li className="popular-item first" >
                <a href="/product/606/svetlana-kononovich-dekorativnaya-kompoziciya-5-iz-kashpo-metalla-iskusstvennykh-cvetov-i-sukhocvetov">
                    <div className="popular-item-content">
                    </div>
                    <div className="details">
                        <div className="stars-new">
                            <div className="empty"></div>
                            <div className="raiting" ></div>
                        </div>
                        <div className="delivers">
                            <div className="type-of-deliver">
                                <div className="explain">
                                    Само-
                                    <br />вывоз
                                </div>
                                <div className="icon">
                                    <img src={shop} alt="Самовывоз" />
                                </div>
                            </div>
                            <div className="type-of-deliver deliver" >
                                <div className="explain">Курьер</div>
                                <div className="icon">
                                    <img src={deliver} alt="Курьер" />
                                </div>
                            </div>
                            <div className="date-of-deliver">Завтра,<br />другой день</div>
                        </div>
                        <div className="buy-section">
                            <span className="price" >30 BYN </span>
                            <button className="orange-button buy-button">Купить</button>
                        </div>
                        <div className="payment-options">
                            <img src={cash} alt="Наличными при получении заказа" />
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    )
}

export default Product;