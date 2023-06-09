import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Item() {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="content">
                    <h2 class="content__title">Свитшот Sweet Shot</h2>
                    <div class="content-nav-list">
                        <p class="content-nav-list__item">Главная</p>
                        <p class="content-nav-list__item">Свитшоты</p>
                        <p class="activate content-nav-list__item3">Свитшоты Sweet Shot</p>
                    </div>
                </div>

                <div class="shop-items__character">
                    <img class="shop-items__img" src="../img/clothing/clothing3.png" alt="dress"></img>
                    <div class="shop-items__select">
                        <p class="shop-items__select-price">$311 <span>$450</span></p>
                        <h4 class="shop-items__select-text">Выберите размер</h4>
                        <div class="shop-items__select-sizes">
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XL</button>
                        </div>
                        <h4 class="shop-items__select-subtext">Выберите цвет</h4>
                        <div class="shop-items__select-color">
                            <div class="brown active"></div>
                            <div class="grey"></div>
                            <div class="red"></div>
                            <div class="yellow"></div>
                        </div>

                        <div class="shop-items__busket">
                            <button class="busket-count">1</button>
                            <button class="busket-add">Добавить в корзину</button>
                        </div>
                    </div>
                </div>

                <div class="shop-items__others">
                    <h2 class="shop-items__title">Связанные товары</h2>

                    <div class="clothing-collection__images">
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src="../img/clothing/clothing1.png"
                                alt="Dress"></img></a>
                            <p class="item__desc">Футболка USA <br></br> <span class="span">$229</span> <span>$129</span>
                            </p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src="../img/clothing/clothing2.png"
                                alt="Dress"></img></a>
                            <p class="item__desc">Купальник Glow <br></br> <span>$59</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Item