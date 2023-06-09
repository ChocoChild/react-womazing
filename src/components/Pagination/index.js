import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from "./Pagination.module.scss"



function Pagination({onChangePage, value}) {
  return (
    <div> 
    <ReactPaginate
    className={styles.paginate}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={3}
    pageCount={4}
    previousLabel="<"
    forcePage={value - 1 }
    renderOnZeroPageCount={null}
  /></div>
  )
}

export default Pagination