import React from 'react'

import items from "../img/clothing/clothing1.png"
import items2 from "../img/clothing/clothing2.png"
import items3 from "../img/clothing/clothing3.png"

function Clothing() {
  return (
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
                    <button className="button-opacity">Открыть магазин</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clothing