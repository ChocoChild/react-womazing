import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import girl from "../../img/about/girl1.jpg"
import girl2 from "../../img/about/girl2.jpg"
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
        <Header />
        <div class="container">
        <div class="content">
            <h2 class="content__title">О бренде</h2>
            <div class="content-nav-list">
                <p class="content-nav-list__home">Главная</p>
                <p class="activate content-nav-list__shop">О бренде</p>
            </div>
        </div>
        <div class="brand-desc">
            <img class="brand-desc__img" src={girl} alt="Girl"></img>
            <div class="brand-desc__text">
                <h2 class="text__title">Идея и женщина</h2>
                <p class="text__subtitle">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие
                    итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является
                    модельером.

                    Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих
                    коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского
                    со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
            </div>
        </div>
        <div class="brand-desc">
            <div class="brand-desc__text">
                <h2 class="text__title">Магия в деталях</h2>
                <p class="text__subtitle">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая
                    коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.

                    Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана
                    с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу
                    кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в
                    то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту
                    не существовало. </p>
            </div>
            <img class="brand-desc__img" src={girl2} alt="Girl"></img>
        </div>
        <div class="brand-desc__button">
            <Link to="/shop">
            <button class="button">Перейти в магазин</button>
            </Link>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs