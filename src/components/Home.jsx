import React from 'react';
import { Link } from 'react-router-dom';
import ModalWindow from './ModalWindow';
import { useSelector, useDispatch } from 'react-redux';

import bgColor from "../img/header/bg-color.png";
import dress from "../img/header/dress.svg"
import telephone from "../img/header/telepnohe.svg"
import cart from "../img/header/cart.svg"
import down from "../img/header/down.svg"
import headerLogo from "../img/header/header1.png"
import headerLogo2 from "../img/header/header2.png"
import headerLogo3 from "../img/header/header3.png"
import items from "../img/clothing/clothing1.png"
import items2 from "../img/clothing/clothing2.png"
import items3 from "../img/clothing/clothing3.png"
import icon from "../img/about/quality 1.svg"
import icon2 from "../img/about/about2.svg"
import icon3 from "../img/about/about3.svg"
import team from "../img/about/team.png"
import footerIcon from "../img/footer/instagram.svg"
import footerIcon2 from "../img/footer/facebook.svg"
import footerIcon3 from "../img/footer/twitter.png"
import visa from "../img/footer/visa.svg"
import { selectCategory } from '../redux/navigationSlice';


function Home() {
    const categoryId = useSelector(state => state.navigation.categoryId);
    const dispatch = useDispatch()
    const [footerList, setFooterList] = React.useState(0);
    const [reguestCall, setReguestCall] = React.useState(false)
    const list = ["Главная", "Магазин", "О бренде", "Контакты"];

    const goToClothing = () => {
        window.scrollTo({
            top: 850,
            behavior: "smooth"
        })
    }

    window.scrollTo(0, 0)

    return (
        <div>
            <div className="header">
                <img className="header__img" src={bgColor} alt="Dress"></img>
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
                                {list.map((obj, i) =>
                                    <li
                                        key={i}
                                        onClick={() => dispatch(selectCategory(i))}
                                        className="list__item"><a className={categoryId === i ? 'active' : ''} href="#!">{obj}</a></li>
                                )}
                            </ul>
                        </div>
                        <div className="header__contacts">
                            <img className="header__contacts-img" src={telephone} alt="telephone"></img>
                            <button className="header__contacts-link" onClick={() => setReguestCall(true)}>+7 (495) 823-54-12</button>
                        </div>
                        <div className="header__cart">
                            <Link to="/basket">
                                <img className="header__cart-basket" src={cart} alt="cart"></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header__content">
                        <div className="header__content-desc">
                            <h1 className="header__subtitle">Новые поступления <br></br> в этом сезоне</h1>
                            <p className="header__text">Утонченные сочетания и бархатные <br></br> оттенки - вот то, что вы искали в этом <br></br> сезоне. Время
                                исследовать.</p>
                            <div className="content-buttons">
                                <button onClick={goToClothing} className="content-buttons__picture">
                                    <img src={down} alt="vector-down"></img>
                                </button>
                                <Link to="/shop">
                                    <button className="button content-buttons__button">Открыть магазин</button>
                                </Link>
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
            <section className="clothing">
                <div className="container">
                    <div className="clothing-collection">
                        <h2 className="clothing-collection__title">Новая коллекция</h2>
                        <div className="clothing-collection__images">
                            <div className="clothing-collection__item">
                                <a href="#!"><img className="clothing-collection__item-image" src={items}
                                    alt="Dress"></img></a>
                                <p className="item__desc">Футболка USA <br></br> <span className="span">$229</span> <span>$129</span>
                                </p>
                            </div>
                            <div className="clothing-collection__item">
                                <a href="#!"><img className="clothing-collection__item-image" src={items2}
                                    alt="Dress"></img></a>
                                <p className="item__desc">Купальник Glow <br></br> <span>$59</span></p>
                            </div>
                            <div className="clothing-collection__item">
                                <a href="#!"><img className="clothing-collection__item-image" src={items3}
                                    alt="Dress"></img></a>
                                <p className="item__desc">Свитшот Sweet Shot <br></br> <span>$89</span></p>
                            </div>
                        </div>
                        <div className="clothing-collection__button">
                            <Link to="/shop">
                                <button className="button-opacity">Открыть магазин</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <ModalWindow reguestCall={reguestCall} setReguestCall={setReguestCall} />
            <section className="about">
                <div className="container">
                    <div className="about">
                        <div className="about-advantage">
                            <h2 className="about-advantage__title">Что для нас важно</h2>
                            <div className="about-advantage__desc">
                                <div className="desc-text">
                                    <img className="desc-text__pic" src={icon} alt="#!"></img>
                                    <h3 className="desc-text__title">Качество</h3>
                                    <p className="desc-text__subtitle">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
                                    </p>
                                </div>
                                <div className="desc-text">
                                    <img className="desc-text__pic" src={icon2} alt="#!"></img>
                                    <h3 className="desc-text__title">Скорость</h3>
                                    <p className="desc-text__subtitle">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
                                    </p>
                                </div>
                                <div className="desc-text">
                                    <img className="desc-text__pic" src={icon3} alt="#!"></img>
                                    <h3 className="desc-text__title">Ответственность</h3>
                                    <p className="desc-text__subtitle">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                                </div>
                            </div>
                            <h2 className="about-advantage__title">Команда мечты Womazing</h2>
                            <div className="about__team">
                                <div className="about__team-image">
                                    <img src={team} alt='team'></img>
                                </div>
                                <div className="about__team-text">
                                    <h3 className="text__title">Для каждой</h3>
                                    <p className="text__subtitle">Каждая девушка идеальна. Однако мы схожи в миллионе мелочей.</p>
                                    <p className="text__subtitle">Womazing ищет эти мелочи и создает прекраные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                                    <Link to="/about" className="text__link" href="#!">Подробнее о бренде</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer__wrapper">
            <div className="container">
                <div className="footer">
                    <div className="footer__logo">
                        <Link to="/">
                        <img className="footer__logo-img" src={dress} alt="logo"></img>
                        </Link>
                        <h3 className="footer__logo-title">Womazing</h3>
                    </div>
                    <div className="footer__nav">
                        <ul className="nav__list">
                            {list.map((obj, i) => 
                            <li
                            key={i}
                            onClick={() => setFooterList(i)}
                            ><a className={footerList ===  i ?  'active' : ''} href="#!">{obj}</a></li>
                            )}
                        </ul>
                    </div>
                    <div className="footer__contacts">
                        <a className="contacts__link" href="#!">+7 (495) 823-54-12</a>
                        <p className="contacts__subtitle">hello@womazing.com</p>
                        <div className="footer__contacts-social-icons">
                            <img className="contacts-social-icons__img" src={footerIcon} alt="instagram"></img>
                            <img className="contacts-social-icons__img" src={footerIcon2} alt="facebook"></img>
                            <img className="contacts-social-icons__img" src={footerIcon3} alt="twitter"></img>
                        </div>
                        <img className="footer__contacts-img" src={visa} alt="visa"></img>
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__links-lefts">
                        <p className="lefts__subtitle"><a className="lefts__link" href="#!">© Все права защищены</a></p>
                        <p className="lefts__subtitle"><a className="lefts__link" href="#!">Политика конфиденциальности</a></p>
                        <p className="lefts__subtitle"><a className="lefts__link" href="#!">Публичная оферта</a></p>
                    </div>
                    <div className="footer__links-category">
                        <p className="category__subtitle"><a className="category__link" href="#!">Пальто</a></p>
                        <p className="category__subtitle"><a className="category__link" href="#!">Свитшоты</a></p>
                        <p className="category__subtitle"><a className="category__link" href="#!">Кардиганы</a></p>
                        <p className="category__subtitle"><a className="category__link" href="#!">Толстовки</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home