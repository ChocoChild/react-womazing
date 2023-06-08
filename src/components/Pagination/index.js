import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from "./Pagination.module.scss"

function Pagination() {
  return (
    <div> 
    <ReactPaginate
    className={styles.paginate}
    breakLabel="..."
    nextLabel=">"
    // onPageChange={handlePageClick}
    pageRangeDisplayed={6}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  /></div>
  )
}

export default Pagination