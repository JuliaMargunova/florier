import React from "react";
import all_payment_logo_transparent from '../.././styles/new-images/all_payment_logo_transparent.png';
import artpay_transparent from '../.././styles/new-images/artpay_transparent.png';
import vk from '../.././styles/new-images/vk.png';
import instagram from '../.././styles/new-images/instagram.png';
import fb from '../.././styles/new-images/fb.png';


const Footer=()=>{
    return(
        <div className="footer">

            <div className="footer-content">
                <div className="social-section">
                    <p>© 2017-2020 Florier</p>
                    <ul>
                        <li><a href="https://vk.com/florier" target="_blank"><img src={vk} alt="vk" /></a></li>
                        <li><a href="https://www.instagram.com/florier.by/" target="_blank"><img src={instagram} alt="instagram" /></a></li>
                        <li><a href="https://www.facebook.com/florier.by/" target="_blank"><img src={fb} alt="facebook" /></a></li>
                    </ul>
                </div>
                <div className="for-people">
                    <ul>
                        <li><p className="bolder">Покупателям</p></li>
                        <li><a href="/b2c-agreement">Информационное соглашение</a></li>
                        <li><a href="/privacy-policy">Политика конфеденциальности</a></li>
                        <li>
                            <a href="/sitemap">Карта сайта</a>
                            &nbsp;&nbsp;
                            <a href="/about-us">О нас</a>
                        </li>
                    </ul>
                </div>
                <div className="for-people">
                    <ul>
                        <li><p className="bolder">Продавцам</p></li>
                        <li><a href="/public-contract">Публичная оферта</a></li>
                        <li><a href="https://sites.google.com/site/florierhelptoseller/home/uslovia-sotrudnicestva" target="_blank">Условия работы</a></li>
                        <li><a href="https://sites.google.com/site/florierhelptoseller/9-castye-voprosy-cavo" target="_blank">Частые вопросы</a></li>
                    </ul>
                </div>
                <div className="pays">
                    <div className="payment-systems">
                        <a ><img src={all_payment_logo_transparent} alt="Платежные системы" /></a>
                    </div>
                    <div className="artpay" style={{ textAlign: 'center' }} >
                        <a href="https://www.artpay.by/" target="_blank"><img src={artpay_transparent} alt="Artpay" /></a>
                    </div>
                </div>
            </div>
            <div className="m-footer-content">
                <div className="support">
                    <p className="bolder">Служба поддержки:</p>
                    <a href="tel:+375291447774">+375 (29) 144 77 74 (velcom, viber)</a>
                </div>
                <div className="for-people">
                    <ul>
                        <li><p className="bolder">Покупателям</p></li>
                        <li><a href="/b2c-agreement">Информационное соглашение</a></li>
                        <li><a href="/privacy-policy">Политика конфеденциальности</a></li>
                        <li><a href="/sitemap">Карта сайта</a></li>
                        <li><a href="/about-us">О нас</a></li>
                    </ul>
                    <br />
                </div>
                <div className="for-people">
                    <ul>
                        <li><p className="bolder">Продавцам</p></li>
                        <li><a href="/public-contract">Публичная оферта</a></li>
                        <li><a href="https://sites.google.com/site/florierhelptoseller/home/uslovia-sotrudnicestva" target="_blank">Условия работы</a></li>
                        <li><a href="https://sites.google.com/site/florierhelptoseller/9-castye-voprosy-cavo" target="_blank">Частые вопросы</a></li>
                    </ul>
                </div>
                <div className="pays">
                    <div className="payment-systems">
                        <a ><img src="/css/new-images/all_payment_logo_transparent.png" alt="Платежные системы" /></a>
                    </div>
                    <div className="artpay" >
                        <a href="https://www.artpay.by/" target="_blank"><img src="/css/new-images/artpay_transparent.png" alt="Artpay" /></a>
                    </div>
                </div>
                <div className="social-section">
                    <ul>
                        <li><a href="https://vk.com/florier" target="_blank"><img src="/css/new-images/n-vk.png" alt="vk" /></a></li>
                        <li><a href="https://www.instagram.com/florier.by/" target="_blank"><img src="/css/new-images/n-inst.png" alt="instagram" /></a></li>
                        <li><a href="https://www.facebook.com/florier.by/" target="_blank"><img src="/css/new-images/n-fb.png" alt="facebook" /></a></li>
                    </ul>
                    <p>© 2017-2020 Florier</p>
                </div>
            </div>

        </div>

    )
}

export default Footer;
