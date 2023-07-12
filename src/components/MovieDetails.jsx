import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {

    const {id} = useParams()
    const [movie,setMovie] = useState([])


    // get movie details by axios method
    const getMovieDetails = async ()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
        setMovie(res.data)
    }
    useEffect(()=>{
        getMovieDetails()
    },[])

    return ( 
        <div className="">
            <div className="text-center text-4xl py-4 text-slate-700">
                The movie details
            </div>
            <div className="bg-slate-300 flex-wrap flex justify-evenly items-center min-h-[300px] ">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="h-[260px] w-[220px] p-4 rounded-[50px]" />
                <div className="p-4 text-slate-700">
                    <div className="px-10 text-slate-900  text-2xl py-3"> Information</div>
                    <div > The film name  : <span className="text-slate-900"> {movie.original_title} </span></div>
                    <div > Release_date   : <span className="text-slate-900"> {movie.release_date} </span></div>
                    <div > The film type  : <span className="text-slate-900">{movie.adult === false ? <span>all</span>  : <span>adult</span>} </span></div>
                    <div > The vote_count : <span className="text-slate-900"> {movie.vote_count} </span></div>
                    <div > The evaluation : <span className="text-slate-900"> {movie.vote_average} </span></div>
                    <div > The budget     : <span className="text-slate-900"> ${movie.budget} </span></div>
                </div>
            </div>
            <hr className="bg-white h-2"/>
            <div className="bg-slate-300 p-8">
                <div className="text-3xl text-slate-700 text-center pb-4" > The story : </div>
                <div className="text-slate-800">
                    {movie.overview}
                </div>
            </div>
            <div className="flex justify-center gap-4 items-center my-8" >
                <Link to="/" >
                    <button className="rounded-md  bg-slate-400 text-white px-2 py-3">Back the main page </button>
                </Link>
                <a href={movie.homepage}>
                    <button className=" rounded-md bg-slate-400 text-white px-2 py-3">Watch the film </button>
                </a>
            </div>
        </div>
     );
}
 
export default MovieDetails;