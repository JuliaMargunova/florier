import React from 'react';
import { productsAPI } from '../../API/api';
import deliver from '../.././styles/new-images/deliver.png';
import cash from '../.././styles/new-images/catalog/payment-options/cash.svg';
import card from '../.././styles/new-images/catalog/payment-options/card.svg';
import shop from '../.././styles/new-images/shop.png';

const Product = ({ title, mainSmallPhoto, priceFormatBYN, bouquetQualityAverage, sizeFormat, components }) => {

    //const [hover, toggle] = React.useReducer(hover => !hover, false);
 
    return (
        <div className="popular-item">
            <a href="/product/483/buket-klubnika-v-glazuri-500g" >
                <div className="popular-item-content">
                    <div className="image-item">
                        <em className="heart empty" data-bind="click: $parent.addToFavorites"></em>
                        <div className="wrap" itemScope="" itemType="http://schema.org/ImageObject">
                            <img itemProp="image" style={{ width: '100%' }} src="https://data.kontrakty.ua/cache/www/450,0/images/stories/IMG_7073_08.05.21.jpg" alt={title} />
                            <meta itemProp="name" content={title} />
                        </div>
                        <div className="title-shadow" >{title}</div>

                        {/* <div className="more-information-item" style={{ opacity: hover ? 3 : 0 }} onMouseLeave={toggle} onMouseEnter={toggle}> */}
                        <div className="more-information-item" >
                            <p className="size" >{sizeFormat}</p>
                            {components.map((plant) => <p key={plant.plantId}> {plant.title + ' — ' + plant.count + ' шт.,'}</p>)}
                            <p className="underline-text">{title}</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="stars-new">
                            <div className="empty"></div>
                            <div className="raiting" style={{ width: bouquetQualityAverage ? bouquetQualityAverage / 5 * 100 + '%' : '0%' }}></div>
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
                            <span className="price" >{priceFormatBYN} </span>
                            <button className="orange-button buy-button">Купить</button>
                        </div>
                        <div className="payment-options">
                            <img src={card} alt="Банковской картой онлайн"></img>
                            <img src={cash} alt="Наличными при получении заказа" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Product;