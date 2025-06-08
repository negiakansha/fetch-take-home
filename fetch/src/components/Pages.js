//Navigate search pages
const Pages = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pages">
      <button className="pages-button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        ◀ Prev
      </button>
      <span className="page-label">
        Page {currentPage} of {totalPages}
      </span>
      <button className="pages-button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next ▶
      </button>
    </div>
  );
};

export default Pages;
