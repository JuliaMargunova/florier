import React from "react";
import logo from '../.././styles/new-images/main-logo.svg';

const Header = () => {
    return (
        <div className="header-new">
            <div className="header-container">
                <div id="menu-button" className="menu-button" >
                    <a className="medium" >
                        <img src="/css/new-images/m-nav.svg" alt="Mobile Nav" />
                    </a>
                    <a className="low" >
                        <img src="/css/new-images/m-nav.svg" alt="Mobile Nav" />
                    </a>
                </div>
                <div className="logo separator">
                    <a href="/">
                        <img src={logo} alt="Florier" />
                    </a>
                </div>
                <div className="title separator">
                    <p className="orange-title">сотни букетов</p>
                    <p>из магазинов вашего города</p>
                </div>
                <div className="place" >
                    <div className="places">
                        <span >Минск</span>
                    </div>
                </div>

                <div className="user-panel-new">
                    <em className="heart">

                    </em>
                    <button className="orange-button" >Войти</button>
                    <button className="green-button" >Создать магазин</button>
                </div>

            </div>
        </div>
    )
}

export default Header;

{/* <div className={s.header_new}>
<div className={s.header_container}>
    <div id="menu_button" className={s.menu_button} >
        <a className={s.medium} >
            <img src={nav} alt="Mobile Nav" />
        </a>
        <a className={s.low} >
            <img src={nav} alt="Mobile Nav" />
        </a>
    </div>
    <div className={`${s.logo} ${s.separator}`}>
        <a href="/">
            <img src={logo} alt="Florier" />
        </a>
    </div>
    <div className={`${s.title} ${s.separator}`}>
        <p className={s.orange_title}>сотни букетов</p>
        <p>из магазинов вашего города</p>
    </div>
    <div className={s.place} >
        <div className={s.places}>
            <span >Минск</span>
        </div>
    </div>

    <div className={s.user_panel_new}>
        <em className={s.heart}>

        </em>
        <button className={s.orange_button} >Войти</button>
        <button className={s.green_button} >Создать магазин</button>
    </div>

</div>
</div> */}