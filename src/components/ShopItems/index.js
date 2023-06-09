import React from 'react'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'

function ShopItems({ items, setCurrentPage, currentPage }) {

    return (
        <div className="clothing-collection__items">
            {items.map((obj) =>
                <div 
                key={obj.id}
                className="clothing-collection__item">
                    <Link to="/currentItem" href="#!"><img className="clothing--collection__item-image" src={obj.imageUrl}
                        alt="Dress"></img></Link>
                    <p>{obj.name}<br></br> <span>${obj.price}</span>
                    </p>
                </div>
            )}
            <Pagination onChangePage={(number) => setCurrentPage(number)} value={currentPage} />
        </div>
    )
}

export default ShopItems