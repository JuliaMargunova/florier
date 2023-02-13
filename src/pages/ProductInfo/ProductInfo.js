import React from "react";

const ProductInfo = () => {
    return (<div>
        <div className="contaner" data-bind="fadeVisible: isLoaded" >
            <div className="tovar-page" data-bind="fadeVisible: isLoaded" >
                <div className="col-left">
                    <div className="tovar-images">
                        <div className="large" itemScope="" itemType="http://schema.org/ImageObject">
                            <img itemProp="image" src="http://florier-api.somee.com/api/Images/ProductPhotos/51829fcb-c3f0-4319-aa8c-3e5e77da77ce.jpeg" alt="Конверт Новогодний" style={{width: '535px', maxWidth: '535px'}} />
                            <meta itemProp="name" data-bind="attr: { 'content': title }" content="Конверт Новогодний" />
                        </div>
                        <div className="small" data-bind="fadeVisible: mainPhoto()">
                            <div className="img-icons">
                                <img data-bind="attr: { src: mainPhoto, alt: title() + ' главное фото' }, css: { 'selected': mainPhoto() === selectedGalleryPhoto() }, click: selectMainPhoto" alt="Конверт Новогодний главное фото" className="selected" src="http://florier-api.somee.com/api/Images/ProductPhotos/51829fcb-c3f0-4319-aa8c-3e5e77da77ce.jpeg" />

                            </div>
                        </div>
                    </div>
                    <div className="play-video" style={{backgroundСolor: '#000000', display: 'none'}} data-bind="visible: videoHtml, html: videoHtml"></div>
                </div>
                <div className="col-right">
                    <div className="m-basket">
                        <div className="to-fav">
                            <a href="javascript:;" data-bind="click: !isFavorite() ? addToFavorites : removeFromFavorites, css: { disable: $root.orderModel.isNotSupply }">
                                <span data-bind="text: !isFavorite() ? 'в избранное' : 'в избранном'">в избранное</span>
                            </a>
                        </div>
                        <div className="to-order">
                            <a href="javascript:;" data-bind="click: $root.gotoOrder, css: { disable: $root.orderModel.isNotSupply }">
                                <img src="/css/new-images/basket.svg" alt="оформить заказ" />
                                <span>купить</span>
                            </a>
                        </div>
                    </div>
                    <h1 itemProp="name" className="large-title" data-bind="text: title">Конверт Новогодний</h1>
                    <div className="m-product-photo">
                        <img itemProp="image" data-bind="attr: { src: selectedGalleryPhoto, alt: title }" src="http://florier-api.somee.com/api/Images/ProductPhotos/51829fcb-c3f0-4319-aa8c-3e5e77da77ce.jpeg" alt="Конверт Новогодний" />
                        <div style={{backgroundColor: '#000000', display: 'none', marginTop : '20px'}} data-bind="visible: videoHtml, html: videoHtml"></div>
                    </div>
                    <div className="article-large" data-bind="text: articleFormat">Артикул: 200094322563</div>
                    <meta itemProp="mpn" data-bind="attr: { 'content': productId }" content="474" />
                    <meta itemProp="sku" data-bind="attr: { 'content': article }" content="200094322563" />
                    <div itemProp="offers" itemScope="" itemType="http://schema.org/Offer" className="buy-block">
                        <link itemProp="availability" href="http://schema.org/InStock" />
                        <link itemProp="url" data-bind="attr: { 'href': url }" href="http://florier-api.somee.com/product/568/magazin-%22flowerbox%22-miks-%E2%84%964-iz-belykh-roz-i-ehvkalipta" />
                        <div className="stars">
                            <div data-bind="style: { 'width': bouquetQualityAverage() ? bouquetQualityAverage() / 5 * 100 + '%' : '0%' }" style={{width: '60%'}}></div>
                        </div>/
                        <div className="price" data-bind="text: priceFormat">46 BYN</div>
                        <meta itemProp="price" data-bind="attr: { 'content': price }" content="46" />
                        <meta itemProp="priceCurrency" content="BYN" />
                        <meta itemProp="priceValidUntil" data-bind="attr: { 'content': priceValidUntil }" content="2023-03-10" />
                        <div className="btns">
                            <a href="javascript:;" className="buy fancy" data-bind="click: $root.gotoOrder, css: { disable: $root.orderModel.isNotSupply }, text: $root.orderModel.isNotSupply() ? 'Временно не доступно' : 'Оформить заказ'">Оформить заказ</a>
                            <a href="javascript:;" className="favorite" style={{textЕransform : 'none'}}>В избранное</a>
                            <a href="javascript:;" className="favorite" style={{textЕransform: 'none', display: 'none'}} data-bind="visible: isFavorite, click: removeFromFavorites">Удалить из избранного</a>
                            <a href="javascript:;" className="favorite" style={{textЕransform: 'none'}} data-bind="click: shopInfo.gotoDialog">Написать продавцу</a>
                        </div>
                        <h4 >Варианты оплаты:</h4>
                        <div className="pay" data-bind="foreach: paymentOptions">
                            <a href="javascript:;" data-bind="click: $parent.selectPaymentOptionId">
                                <img data-bind="attr: { src: PaymentOptionId == $root.orderModel.selectedPaymentOptionId() ? ImageSrcActive : ImageSrc, alt: Description }" src="/css/images/pay2.png" alt="Оплата наличными курьеру при доставке или получении заказа в магазине." />
                            </a>
                        </div>/<div className="m-pay">
                            <div className="edit-inp edit-checkbox edit-right check-radio">
                                <input type="radio" name="m-pay" id="m-card" checked="checked" />
                                <label for="m-card">Банковской картой</label>
                                <div className="clear"></div>
                            </div>
                        </div>
                        <div className="col-left m-delivery" style={{paddingЕop: '8px'}}>
                            <h4 style={{marginBottom: '15px'}}>Тип доставки:</h4>
                            <div className="product-view-courier-type active" data-bind="visible: isCourierDelivery, click: $root.orderModel.selectCourierDelivery, css: { 'active': $root.orderModel.selectedDelivery() == 'courier' }" >
                                <span>Курьером</span>
                            </div>
                            <div className="product-view-pickup-type" data-bind="visible: isPickupDelivery, click: $root.orderModel.selectPickupDelivery, css: { 'active': $root.orderModel.selectedDelivery() == 'pickup' }">
                                <span>Самовывоз</span>
                            </div>
                        </div>
                        <div className="col-right" style={{paddingTop: '8px'}}>
                            <h4>Возможная дата доставки:</h4>
                            <div className="tab-small" data-bind="foreach: $root.orderModel.computedSuppliesArray">
                                <input type="checkbox" name="date_del" data-bind="value: $data.key, disable: $data.key == 'notSupply', checked: ($root.orderModel.globalSelectedDate() == $data.key &amp;&amp; $data.key != 'preorder') || ($root.orderModel.globalSelectedDate() == $data.key &amp;&amp; $data.key == 'preorder' &amp;&amp; $root.orderModel.selectedDate()), attr: { id: 'check_' + $index() }, event: { change: $root.orderModel.selectTypeDate }" value="preorder" id="check_0" />
                                <label data-bind="attr: { for: 'check_' + $index() }, text: $data.key == 'preorder' &amp;&amp; $root.orderModel.globalSelectedDate() == $data.key &amp;&amp; $root.orderModel.selectedDate() ? $root.orderModel.selectedDate() : $data.title" for="check_0">Другой день</label>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="form-block" style={{paddingTop: '60px'}}>
                        <h4>Описание букета:</h4>
                        <div className="form-title-small" style={{marginTop: '15px'}}>Размеры</div>
                        <p data-bind="html: heightFormat() + '<br>' + widthFormat()">Высота букета: 40 см<br />Ширина букета: 20 см</p>
                    </div>
                    <div className="form-block">
                        <div className="form-title-small">Состав</div>
                        <p data-bind="foreach: plants">/
                            <a data-bind="text: Title + ' (' + Count + 'шт.), ', attr: { 'href': Url }" href="/minsk/catalog/plants-zelen">Зелень (1шт.), </a>

                            <a data-bind="text: Title + ' (' + Count + 'шт.)', attr: { 'href': Url }" href="/minsk/catalog/plants-drugie">Другие (1шт.)</a>

                        </p>
                    </div>
                    <div className="form-block">
                        <div className="form-title-small">Категория букета</div>
                        <p data-bind="foreach: categories">
                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/cat-korobki-s-cvetami">Коробки с цветами, </a>

                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/cat-suhocvety">Сухоцветы, </a>

                            <a data-bind="text: Title, attr: { 'href': Url }" href="/minsk/catalog/cat-korziny-s-cvetami">Корзины с цветами</a>

                        </p>
                    </div>
                    <div className="form-block">
                        <div className="form-title-small">События</div>
                        <p data-bind="foreach: events">
                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/events-novyy-god">Новый Год, </a>

                            <a data-bind="text: Title, attr: { 'href': Url }" href="/minsk/catalog/events-bukety-prosto-tak">Просто так</a>

                        </p>
                    </div>
                    <div className="form-block">
                        <div className="form-title-small">Кому</div>
                        <p data-bind="foreach: recipients">

                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/for-zhenshchine">Женщине, </a>

                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/for-lyubimoj">Любимой, </a>


                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/for-uchitelyu">Учителю, </a>

                            <a data-bind="text: Title + ', ', attr: { 'href': Url }" href="/minsk/catalog/for-v-ofis">В офис, </a>

                            <a data-bind="text: Title, attr: { 'href': Url }" href="/minsk/catalog/for-mame">Маме</a>

                        </p>
                    </div>
                    <div className="form-block">
                        <div className="form-title-small">Дополнительное описание</div>
                        <p data-bind="text: description() ? description : 'нет'">Букет состоит из компонентов: зелень, другие. Преподнесите такого рода подарок женщине, любимой, учителю, в офис, маме. Поводом может стать: Новый Год, Просто так.</p>

                        <meta itemProp="description" data-bind="attr: { 'content': description }" content="Букет состоит из компонентов: зелень, другие. Преподнесите такого рода подарок женщине, любимой, учителю, в офис, маме. Поводом может стать: Новый Год, Просто так." />

                    </div>
                </div>
                <div className="clear"></div>
                <div className="reviews" data-bind="foreach: { data: reviews }"></div>
                <div className="clear"></div>
            </div>
        </div>

    </div>)
}

export default ProductInfo;