import React from "react"

const Navigation = () => {

    return (
        <div className="nav-new dark ">
            <ul>
                <li >
                    <a href="/catalog-map">Умная карта</a>
                </li>
                <li className="">
                    <a href="/catalog">Каталог цветов</a>
                </li>
                <li className="active">
                    <a href="/check-order" >Проверка заказа</a>
                </li>
                <li className="">
                    <a href="/reviews">Отзывы</a>
                </li>
                <li >
                    <a href="https://sites.google.com/site/florierhelptobuyer/" target="_blank">Помощь</a>
                </li>
                <li className="message" style={{ paddingLeft: '40px' }}  >
                    <span style={{
                        color: '#27ae60', fontWeight: 600
                    }}>ЗАКАЗЫ ПРИНИМАЮТСЯ ОНЛАЙН</span>
                </li>
                <li className="phone" style={{ paddingLeft: '0px' }} >
                    <a style={{
                        lineHeight: '30px',
                        height: '25px'
                    }} href="tel:+375291447774">+375 (29) 144 77 74 (Viber, Telegram, WhatsApp)</a>
                    <span >Пн-Пт c 9:00 до 18:00</span>
                    <span style={{
                        display: 'block',
                        textAlign: 'center',
                        color: '#ff883f'
                    }} >Служба поддержки</span>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;