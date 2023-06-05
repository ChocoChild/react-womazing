import React from 'react';

import dress from "../img/header/dress.svg"
import telephone from "../img/header/telepnohe.svg"
import cart from "../img/header/cart.svg"
import { Link } from 'react-router-dom';

function Header() {
    const [navList, setNavList] = React.useState(0);
    const list = ["Главная", "Магазин", "О бренде", "Контакты"];

  return (
    <div className="header">
    <div className="container">
        <div className="header__wrapper">
            <div className="header__logo">
                <Link to="/">
                <img className="header__logo-img" src={dress} alt="Dress"></img>
                </Link>
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
    </div>
</div>
  )
}

export default Header