import React from 'react'
import Pagination from '../Pagination'

function ShopItems({ items, setCurrentPage, currentPage }) {

    return (
        <div className="clothing-collection__items">
            {items.map((obj) =>
                <div 
                key={obj.id}
                className="clothing-collection__item">
                    <a href="#!"><img className="clothing--collection__item-image" src={obj.imageUrl}
                        alt="Dress"></img></a>
                    <p>{obj.name}<br></br> <span>${obj.price}</span>
                    </p>
                </div>
            )}
            <Pagination onChangePage={(number) => setCurrentPage(number)} value={currentPage} />
        </div>
    )
}

export default ShopItems