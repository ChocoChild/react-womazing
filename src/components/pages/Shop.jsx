import React from 'react'
import Header from "../Header"
import Footer from "../Footer"

import item from "../../img/clothing/clothing1.png"
import item2 from "../../img/clothing/clothing2.png"
import item3 from "../../img/clothing/clothing3.png"


function Shop() {

    window.scrollTo(0, 0);

    
    return (
        <div>
            <Header />
            <div class="container">
                <div class="content">
                    <h2 class="content__title">Магазин</h2>
                    <div class="content-nav-list">
                        <p class="content-nav-list__item">Главная</p>
                        <p class="activate content-nav-list__item3">Магазин</p>
                    </div>
                </div>

                <div class="shop__category">
                    <button class="shop__category-button active-shop">Все</button>
                    <button class="shop__category-button">Пальто</button>
                    <button class="shop__category-button">Свитшоты</button>
                    <button class="shop__category-button">Кардиганы</button>
                    <button class="shop__category-button">Толстовки</button>
                </div>

                <div class="shop__items">
                    <h4 class="shop__items-title">Показано: 9 из 12 товаров</h4>
                    <div class="clothing-collection__images">
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing--collection__item-image" src={item}
                                alt="Dress"></img></a>
                            <p>Футболка USA <br></br> <span class="span">$229</span> <span>$129</span>
                            </p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item2}
                                alt="Dress"></img></a>
                            <p>Купальник Glow <br></br> <span>$59</span></p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item3}
                                alt="Dress"></img></a>
                            <p>Свитшот Sweet Shot <br></br> <span>$89</span></p>
                        </div>
                    </div>

                    <div class="clothing-collection__images">
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing--collection__item-image" src={item}
                                alt="Dress"></img></a>
                            <p>Футболка USA <br></br> <span class="span">$229</span> <span>$129</span>
                            </p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item2}
                                alt="Dress"></img></a>
                            <p>Купальник Glow <br></br> <span>$59</span></p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item3}
                                alt="Dress"></img></a>
                            <p>Свитшот Sweet Shot <br></br> <span>$89</span></p>
                        </div>
                    </div>

                    <div class="clothing-collection__images">
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing--collection__item-image" src={item}
                                alt="Dress"></img></a>
                            <p>Футболка USA <br></br> <span class="span">$229</span> <span>$129</span>
                            </p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item2}
                                alt="Dress"></img></a>
                            <p>Купальник Glow <br></br> <span>$59</span></p>
                        </div>
                        <div class="clothing-collection__item">
                            <a href="#!"><img class="clothing-collection__item-image" src={item3}
                                alt="Dress"></img></a>
                            <p>Свитшот Sweet Shot <br></br> <span>$89</span></p>
                        </div>
                    </div>

                    <div class="shop__pages">
                        <button class="shop__pages-prev">&larr;</button>
                        <button class="shop__pages-button activate">1</button>
                        <button class="shop__pages-button">2</button>
                        <button class="shop__pages-next">&rarr;</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop