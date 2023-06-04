import React from 'react';

import bgColor from "../img/header/bg-color.png";
import dress from "../img/header/dress.svg"
import telephone from "../img/header/telepnohe.svg"
import cart from "../img/header/cart.svg"
import down from "../img/header/down.svg"
import headerLogo from "../img/header/header1.png"
import headerLogo2 from "../img/header/header2.png"
import headerLogo3 from "../img/header/header3.png"

function Header() {
    const [navList, setNavList] = React.useState(0);
    const list = ["Главная", "Магазин", "О бренде", "Контакты"];

  return (
    <div className="header">
    <img className="header__img" src={bgColor} alt="Dress"></img>
    <div className="container">
        <div className="header__wrapper">
            <div className="header__logo">
                <img className="header__logo-img" src={dress} alt="Dress"></img>
                <p className="header__logo-description">Womazing</p>
            </div>
            <div className="header__nav">
                <ul className="header__nav-list">
                    {list.map((arr, i) => 
                        <li
                        key={i}
                        onClick={() => setNavList(i)}
                        className="list__item"><a className={navList === i ? 'active' : ''} href="#!">{arr}</a></li>
                    )}
                </ul>
            </div>
            <div className="header__contacts">
                <img className="header__contacts-img" src={telephone} alt="telephone"></img>
                <a className="header__contacts-link" href="$!">+7 (495) 823-54-12</a>
            </div>
            <div className="header__cart">
                <img className="header__cart-basket" src={cart} alt="cart"></img>
            </div>
        </div>
        <div className="header__content">
            <div className="header__content-desc">
                <h1 className="header__subtitle">Новые поступления <br></br> в этом сезоне</h1>
                <p className="header__text">Утонченные сочетания и бархатные <br></br> оттенки - вот то, что вы искали в этом <br></br> сезоне. Время
                    исследовать.</p>
                <div className="content-buttons">
                    <button className="content-buttons__picture">
                        <img src={down} alt="vector-down"></img>
                    </button>
                    <button className="button content-buttons__button">Открыть магазин</button>
                </div>
            </div>
            <div className="header__content-pic">
                <img className="header__content-pic__image1" src={headerLogo2} alt="header-logo"></img>
                <img className="header__content-pic__image2" src={headerLogo} alt="header-logo"></img>
                <img className="header__content-pic__image3" src={headerLogo3} alt=""></img>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header