import React from 'react'
import Header from "../Header";


import icon from "../../img/basket/icon.svg"
import girl from "../../img/basket/girl.jpg"
import Footer from '../Footer';

function Basket() {
  return (
    <div>
    <Header />
    <div class="container">
        <div class="content">
            <h2 class="content__title">Корзина</h2>
            <div class="content-nav-list">
                <p class="content-nav-list__item">Главная</p>
                <p class="activate content-nav-list__item3">Корзина</p>
            </div>
        </div>

        <div class="basket">
            <div class="basket__product">
                <div class="basket__product-index">
                    <h4 class="basket__product-title">Товар</h4>
                </div>
                <div class="basket__product-index">
                    <h4 class="basket__product-title">Цена</h4>
                    <h4 class="basket__product-title">Количество</h4>
                    <h4 class="basket__product-title">Всего</h4>
                </div>
            </div>
            <div class="basket__item">
                <div class="basket__item-image">
                    <img src={icon} alt="X"></img>
                    <img src={girl} alt="Girl"></img>
                    <p class="bsket__item-subtitle">Футболка USA</p>
                </div>
                <div class="basket__item-count">
                    <p class="count-price">$129</p>
                    <button>1</button>
                    <p class="count-price">$129</p>
                </div>
            </div>
            <div class="basket-action">
                <div class="basket-action__input">
                    <input type="text" placeholder="Введите купон"></input>
                    <button class="button-opacity">Применить купон</button>
                </div>
                <div class="basket-action__refresh">
                    <button class="button-opacity">Обновить корзину</button>
                </div>
            </div>

            <div class="basket-order">
                <div class="basket-order__text">
                    <h3 class="text__title">Итого: <span>$129</span></h3>
                    <button class="button">Оформить заказ</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Basket