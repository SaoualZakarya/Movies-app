import CardMovie from './CardMovie'
import PaginationComponent from './PaginationComponent';
const MoviesList = ({movies,currentPage,theLastPage}) => {

    return ( 
        <>
        <h1 className="text-center py-4 text-3xl text-slate-500">Movies List</h1>
        <div className='px-24 flex flex-wrap gap-5 justify-center '>
            {
                movies.length >= 1 ? movies.map((movie)=>(
                    <CardMovie key={movie.id} movie={movie} />
                ))
                : <div className='text-slate-400'> No films found ... </div>
            }
        </div>
        {movies.length >= 1 ? (<PaginationComponent currentPage={currentPage} theLastPage={theLastPage}/>) : <div> ...</div> } 
        </>
     );
}
 
export default MoviesList;