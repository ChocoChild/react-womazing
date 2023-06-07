import React from 'react'

function ShopItems({ items }) {

    return (
        <div className="clothing-collection__items">
            {items.map((obj) =>
                <div className="clothing-collection__item">
                    <a href="#!"><img className="clothing--collection__item-image" src={obj.imageUrl}
                        alt="Dress"></img></a>
                    <p>{obj.name}<br></br> <span>${obj.price}</span>
                    </p>
                </div>
            )}

        </div>
    )
}

export default ShopItems