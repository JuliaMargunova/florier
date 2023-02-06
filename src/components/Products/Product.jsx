import React from 'react';
import { productsAPI } from '../../API/api';
import deliver from '../.././styles/new-images/deliver.png';
import cash from '../.././styles/new-images/catalog/payment-options/cash.svg';
import shop from '../.././styles/new-images/shop.png';

const Product = () => {
    return (
        <div className="popular-item">
            <a href="/product/483/buket-klubnika-v-glazuri-500g" >
                <div className="popular-item-content">
                    <div className="image-item">
                        <em className="heart empty" data-bind="click: $parent.addToFavorites"></em>
                        <div className="wrap" itemScope="" itemType="http://schema.org/ImageObject">
                            <img itemProp="image" src="http://florier-api.somee.com/api/Images/ProductPhotos/Small/f8ec21ec-9048-4315-a6bf-bc7889175735.jpeg" alt="Букет клубника в глазури 500г" />
                            <meta itemProp="name" data-bind="attr: { 'content': title }" content="Букет клубника в глазури 500г" />
                        </div>
                        <div className="title-shadow" data-bind="text: title">Букет клубника в глазури 500г</div>
                        <div className="more-information-item">
                            <p className="size" data-bind="html: sizeFormat">↔ 18см &nbsp;&nbsp; ↕ 40см</p>
                            <p>Другие — 1 шт.</p>
                            <p className="underline-text" >Букет клубника в глазури 500г</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="stars-new">
                            <div className="empty"></div>
                            <div className="raiting" style={{ width: '60%' }}></div>
                        </div>
                        <div className="delivers">
                            <div className="type-of-deliver" >
                                <div className="explain">
                                    Само-
                                    <br />вывоз
                                </div>
                                <div className="icon">
                                    <img src={shop} alt="Самовывоз" />
                                </div>
                            </div>
                            <div className="type-of-deliver deliver">
                                <div className="explain">Курьер</div>
                                <div className="icon">
                                    <img src={deliver} alt="Курьер" />
                                </div>
                            </div>
                            <div className="date-of-deliver" >Завтра,<br />другой день</div>
                        </div>
                        <div className="buy-section">
                            <span className="price" >54 BYN </span>
                            <button className="orange-button buy-button">Купить</button>
                        </div>
                        <div className="payment-options">
                            <img src={cash} alt="Наличными при получении заказа" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Product;