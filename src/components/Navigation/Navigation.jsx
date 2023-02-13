import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
    const {pathname} = useLocation();
    return (
        <div className="nav-new dark ">
            <ul>
                <li className={pathname === "/catalog-map" ? "active" : ""} >
                    <Link to="/catalog-map">Умная карта</Link>
                </li>
                <li className={pathname === "/catalog" ? "active" : ""}>
                    <Link to="/catalog">Каталог цветов</Link>
                </li>
                <li className={pathname === "/check-order" ? "active" : ""} >
                    <Link to="/check-order" >Проверка заказа</Link>
                </li>
                <li className={pathname === "/reviews" ? "active" : ""}>
                    <Link to="/reviews">Отзывы</Link>
                </li>
                <li >
                    <a href="https://sites.google.com/site/florierhelptobuyer/" target="_blank">Помощь</a>
                </li>
                <li  className="message" style={{ paddingLeft: '40px' }}  >
                    <span style={{
                        color: '#27ae60', fontWeight: 600
                    }}>ЗАКАЗЫ ПРИНИМАЮТСЯ ОНЛАЙН</span>
                </li>
                <li  className="phone" style={{ paddingLeft: '0px' }} >
                    <Link style={{
                        lineHeight: '30px',
                        height: '25px'
                    }} to="tel:+375291447774">+375 (29) 144 77 74 (Viber, Telegram, WhatsApp)</Link>
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