import { useEffect, useState } from "react";
import MoviesList from"./components/MoviesList";
import NavBar from './components/NavBar'
import axios from 'axios'
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
function App() {
  const [movies,setMovies]=useState([])
  const [theLastPage,setTheLastPage] = useState(0)
  // get all movies by axios method
  const getAllMovies = async ()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en')
    setMovies(res.data.results)
    setTheLastPage(res.data.total_pages)
  }

  // get current page depend on the pagination by axios method
  const currentPage = async (pageNumber) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${pageNumber}`)
    setMovies(res.data.results)
    setTheLastPage(res.data.total_pages)
  }

  useEffect(()=>{
    getAllMovies()
  },[])

  // the function search that filter the films  // provided by the api 
  const search = async (word)=>{
    if(word === ''){
      getAllMovies()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&query=${word}`)
      setMovies(res.data.results) 
      setTheLastPage(res.data.total_pages)
    }
  }
  

  return (
    
      <div className="App">
        <NavBar search={search}/>
        <Router>
          <Routes>
            <Route path="/"  element={<MoviesList movies={movies} currentPage={currentPage} theLastPage={theLastPage}/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;