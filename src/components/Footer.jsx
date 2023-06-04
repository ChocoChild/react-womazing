import React from 'react'

import dress from "../img/header/dress.svg"
import footerIcon from "../img/footer/instagram.svg"
import footerIcon2 from "../img/footer/facebook.svg"
import footerIcon3 from "../img/footer/twitter.png"
import visa from "../img/footer/visa.svg"

function Footer() {
    const [footerList, setFooterList] = React.useState(0)
    const list = ["Главная", "Магазин", "О бренде", "Контакты"];
  return (
    <div class="footer__wrapper">
            <div class="container">
                <div class="footer">
                    <div class="footer__logo">
                        <img class="footer__logo-img" src={dress} alt="logo"></img>
                        <h3 class="footer__logo-title">Womazing</h3>
                    </div>
                    <div class="footer__nav">
                        <ul class="nav__list">
                            {list.map((obj, i) => 
                            <li
                            key={i}
                            onClick={() => setFooterList(i)}
                            ><a class={footerList ===  i ?  'active' : ''} href="#!">{obj}</a></li>
                            )}
                        </ul>
                    </div>
                    <div class="footer__contacts">
                        <a class="contacts__link" href="#!">+7 (495) 823-54-12</a>
                        <p class="contacts__subtitle">hello@womazing.com</p>
                        <div class="footer__contacts-social-icons">
                            <img class="contacts-social-icons__img" src={footerIcon} alt="instagram"></img>
                            <img class="contacts-social-icons__img" src={footerIcon2} alt="facebook"></img>
                            <img class="contacts-social-icons__img" src={footerIcon3} alt="twitter"></img>
                        </div>
                        <img class="footer__contacts-img" src={visa} alt="visa"></img>
                    </div>
                </div>
                <div class="footer__links">
                    <div class="footer__links-lefts">
                        <p class="lefts__subtitle"><a class="lefts__link" href="#!">© Все права защищены</a></p>
                        <p class="lefts__subtitle"><a class="lefts__link" href="#!">Политика конфиденциальности</a></p>
                        <p class="lefts__subtitle"><a class="lefts__link" href="#!">Публичная оферта</a></p>
                    </div>
                    <div class="footer__links-category">
                        <p class="category__subtitle"><a class="category__link" href="#!">Пальто</a></p>
                        <p class="category__subtitle"><a class="category__link" href="#!">Свитшоты</a></p>
                        <p class="category__subtitle"><a class="category__link" href="#!">Кардиганы</a></p>
                        <p class="category__subtitle"><a class="category__link" href="#!">Толстовки</a></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer