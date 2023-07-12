import { Link } from 'react-router-dom';
import '../index.css'

const CardMovie = ({movie}) => {
    return ( 
        <>
        <Link to={`/movie/${movie.id}`}>
            <div className="relative w-[250px]  h-[270px] rounded-md">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Image"  className="rounded-md w-full h-full" />
                <div className="absolute px-4 rounded-md bottom-0 left-0 top-0 right-0 flex flex-col items-center justify-center bg-gray-900 text-white opacity-0 -md transition-opacity duration-300 hover:opacity-80">
                    <p className='py-1 text-center'> The name :{movie.title} </p>
                    <p className='py-1'> Release_date :{movie.release_date} </p>
                    <div className='py-1'> Type :{movie.adult === false ? <span>all</span>  : <span>adult</span>} </div>
                    <p className='py-1'> Evaluation :{movie.vote_average}  </p>
                </div>
            </div>
        </Link>
        </>
     );
}
 
export default CardMovie;