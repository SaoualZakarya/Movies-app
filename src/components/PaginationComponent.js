import ReactPaginate from "react-paginate";
const PaginationComponent = ({currentPage,theLastPage}) => {
    const handlePageClick = (date)=>{
        currentPage(date.selected + 1 )
    }

    return ( 
        <>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    pageCount={theLastPage}
                    previousLabel="< prev"
                    renderOnZeroPageCount={null}
                    containerClassName="flex items-center py-2 bg-slate-100 m-8 gap-6 justify-center "
                    pageClassName="text-blue-900 hover:bg-slate-300 border-solid border-2 border-slate-300 py-1 px-3 rounded-[50%]"
                    previousClassName="text-blue-800 "
                    nextClassName="text-blue-800"
                    breakClassName="text-blue-900 hover:bg-slate-300 border-solid border-2 border-slate-300 py-1 px-3 rounded-[50%] "
                    activeClassName="bg-slate-300"
                />
            </div>
        </>
     );
}
 
export default PaginationComponent;