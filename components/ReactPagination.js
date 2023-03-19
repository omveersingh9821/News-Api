import React from 'react'
import ReactPaginate from "react-paginate";

const ReactPagination = ({articles,articlesPerPage,handlePageClick}) => {
  return (
    <div className="pagination">
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      pageCount={Math.ceil(articles.length / articlesPerPage)}
      onPageChange={handlePageClick}
      containerClassName={"pagination-list"}
      pageClassName={"pagination-item"}
      previousClassName={"pagination-item"}
      nextClassName={"pagination-item"}
      activeClassName={"active"}
    />
  </div>
  )
}

export default ReactPagination