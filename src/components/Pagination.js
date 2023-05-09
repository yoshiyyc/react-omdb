import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PageContext } from "../store";

const Pagination = ({ totalPages }) => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [forcePageNum, setForcePageNum] = useState(totalPages);

  const handlePageClick = (e) => {
    const tempPage = e.selected + 1;
    setCurrentPage(tempPage);
  };

  useEffect(() => {
    setForcePageNum(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="d-flex justify-content-center my-3">
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={forcePageNum}
      />
    </div>
  );
};

export default Pagination;
