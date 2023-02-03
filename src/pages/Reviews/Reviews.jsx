import React from "react";

const Reviews = () => {
    return (
        <div id="content" ><div className="contaner">
            <div className="profile-page guest-reviews">
                <h1>Отзывы о цветочных магазинах</h1>
                <h4>Отзывы только реальных покупателей!</h4>

                <table className="table" data-bind="visible: reviews().length > 0 &amp;&amp; isReviewsLoaded()">
                    <thead>
                        <tr>

                            <th>Продавец</th>
                            <th></th>
                            <th><span data-bind="click: function (){ selectFactor(0); }">Средняя оценка </span><span className="sort-icon" data-bind="text: ascOrder() &amp;&amp; sortFactor() == 0 ? '▲' : '▼', click: function (){ selectFactor(0); }">▼</span></th>
                            <th><span data-bind="click: function (){ selectFactor(1); }">Работа продавца </span><span className="sort-icon" data-bind="text: ascOrder() &amp;&amp; sortFactor() == 1 ? '▲' : '▼', click: function (){ selectFactor(1); }">▼</span></th>
                            <th><span data-bind="click: function (){ selectFactor(2); }">Доставка </span><span className="sort-icon" data-bind="text: ascOrder() &amp;&amp; sortFactor() == 2 ? '▲' : '▼', click: function (){ selectFactor(2); }">▼</span></th>
                            <th><span data-bind="click: function (){ selectFactor(3); }">Свежесть цветов </span><span className="sort-icon" data-bind="text: ascOrder() &amp;&amp; sortFactor() == 3 ? '▲' : '▼', click: function (){ selectFactor(3); }">▼</span></th>
                            <th>Действие</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="shop-image">
                                    <img data-bind="attr: { src: logo || 'css/images/default-shop.png', alt: title }" src="data:image/jpeg;base64,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" alt="Бутик Букетик" />
                                </div>
                            </td>
                            <td valign="top">
                                <div className="shop-details">
                                    <a data-bind="text: title, attr: { href: viewCatalogByShopLink }" href="/catalog/shop-23">Бутик Букетик</a>
                                    <span data-bind="text: city">Минск,</span>
                                    <span data-bind="text: street">улица Жудро, 16</span>
                                </div>
                            </td>

                            <td valign="top">
                                <div className="shop-rating">
                                    <div className="stars-small-yellow">
                                        <div></div>
                                    </div>
                                    <span className="value" data-bind="text: shopRatingAverage ? shopRatingAverage : '0'">5</span>
                                </div>
                            </td>
                            <td valign="top">
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopQualityAverage ? shopQualityAverage : '0'">5</span>
                                </div>
                            </td>
                            <td valign="top">
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: deliveryQualityAverage ? deliveryQualityAverage : '0'">5</span>
                                </div>
                            </td>
                            <td valign="top">
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div></div>
                                    </div>
                                    <span className="value" data-bind="text: bouquetQualityAverage ? bouquetQualityAverage : '0'">5</span>
                                </div>
                            </td>

                            <td valign="top">
                                <div className="action">
                                    <a href="/reviews/23" data-bind="attr: { href: viewReviewsByShopLink }"><button className="active">Смотреть отзывы</button></a>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <table className="m-table" data-bind="visible: reviews().length > 0 &amp;&amp; isReviewsLoaded()">
                    <thead>
                        <tr>
                            <th>Продавец</th>
                            <th></th>
                            <th><span data-bind="click: function (){ selectFactor(0); }">Оценка </span><span className="sort-icon" data-bind="text: ascOrder() &amp;&amp; sortFactor() == 0 ? '▲' : '▼', click: function (){ selectFactor(0); }">▼</span></th>
                            <th>Действие</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="shop-image">
                                    <img data-bind="attr: { src: logo || 'css/images/default-shop.png', alt: title }" src="data:image/jpeg;base64,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" alt="Бутик Букетик" />
                                </div>
                            </td>
                            <td valign="center">
                                <div className="shop-details">
                                    <a data-bind="text: title, attr: { href: viewCatalogByShopLink }" href="/catalog/shop-23">Бутик Букетик</a>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="caption">Средняя оценка</div>
                                <div className="shop-rating">
                                    <div className="stars-small-yellow">
                                        <div></div>
                                    </div>
                                    <span className="value" data-bind="text: shopRatingAverage ? shopRatingAverage : '0'">5</span>
                                </div>
                                <div className="caption">Работа продавца</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopQualityAverage ? shopQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Доставка</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: deliveryQualityAverage ? deliveryQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Свежесть цветов</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: bouquetQualityAverage ? bouquetQualityAverage : '0'">5</span>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="action">
                                    <a href="/reviews/23" data-bind="attr: { href: viewReviewsByShopLink }"><button className="active">Перейти</button></a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="shop-image">
                                    <img data-bind="attr: { src: logo || 'css/images/default-shop.png', alt: title }" />
                                </div>
                            </td>
                            <td valign="center">
                                <div className="shop-details">
                                    <a data-bind="text: title, attr: { href: viewCatalogByShopLink }" href="/catalog/shop-17">Флористическая мастерская VESNA</a>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="caption">Средняя оценка</div>
                                <div className="shop-rating">
                                    <div className="stars-small-yellow">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopRatingAverage ? shopRatingAverage : '0'">5</span>
                                </div>
                                <div className="caption">Работа продавца</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopQualityAverage ? shopQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Доставка</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: deliveryQualityAverage ? deliveryQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Свежесть цветов</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: bouquetQualityAverage ? bouquetQualityAverage : '0'">5</span>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="action">
                                    <a href="/reviews/17" data-bind="attr: { href: viewReviewsByShopLink }"><button className="active">Перейти</button></a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="shop-image">
                                    <img data-bind="attr: { src: logo || 'css/images/default-shop.png', alt: title }" />
                                </div>
                            </td>
                            <td valign="center">
                                <div className="shop-details">
                                    <a data-bind="text: title, attr: { href: viewCatalogByShopLink }" href="/catalog/shop-21">Солнечные цветы</a>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="caption">Средняя оценка</div>
                                <div className="shop-rating">
                                    <div className="stars-small-yellow">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopRatingAverage ? shopRatingAverage : '0'">5</span>
                                </div>
                                <div className="caption">Работа продавца</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopQualityAverage ? shopQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Доставка</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: deliveryQualityAverage ? deliveryQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Свежесть цветов</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: bouquetQualityAverage ? bouquetQualityAverage : '0'">5</span>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="action">
                                    <a href="/reviews/21" data-bind="attr: { href: viewReviewsByShopLink }"><button className="active">Перейти</button></a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="shop-image">
                                    <img />     </div>
                            </td>
                            <td valign="center">
                                <div className="shop-details">
                                    <a data-bind="text: title, attr: { href: viewCatalogByShopLink }" href="/catalog/shop-19">FlowerBox</a>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="caption">Средняя оценка</div>
                                <div className="shop-rating">
                                    <div className="stars-small-yellow">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopRatingAverage ? shopRatingAverage : '0'">4.7</span>
                                </div>
                                <div className="caption">Работа продавца</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: shopQualityAverage ? shopQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Доставка</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: deliveryQualityAverage ? deliveryQualityAverage : '0'">5</span>
                                </div>
                                <div className="caption">Свежесть цветов</div>
                                <div className="shop-rating">
                                    <div className="stars-small">
                                        <div ></div>
                                    </div>
                                    <span className="value" data-bind="text: bouquetQualityAverage ? bouquetQualityAverage : '0'">4</span>
                                </div>
                            </td>

                            <td valign="center">
                                <div className="action">
                                    <a href="/reviews/19" data-bind="attr: { href: viewReviewsByShopLink }"><button className="active">Перейти</button></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

            <div className="pages" >
                <div className="contaner">

                </div>
            </div>
            <div className="page-load gray" >
                <div className="contaner">
                    <a  >Следующие 20 магазинов</a>
                    <ul >
                        <li>

                            <span >1</span>

                        </li>
                    </ul>
                </div>
            </div>

            <div className="page-load contaner" >
                <div className="contaner">Пока никто не оставил отзывы</div>
            </div>

            <div id="pgloading" >
                <div className="loadingwrap">
                    <ul className="bokeh">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <center><a href="http://somee.com">Web hosting by Somee.com</a></center>

            <script lang="JavaScript">aScr = document.createElement('script');aScr.src = location.protocol + "//ads.mgmt.somee.com/serveimages/ad2/WholeInsert5.js";document.body.appendChild(aScr);</script>
        </div>
    )
}

export default Reviews;