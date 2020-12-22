import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  async function getMovies(url) {
    const res = await axios(url);
    const movies = await res.data.results;
    // console.log(movies);
    setMovies(movies);
  }

  const searchMovie = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + e.target.value);
  };

  return (
    <>
      <Header searchMovie={searchMovie} />
      <div id="main">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              imglink={IMG_PATH + movie.poster_path}
              title={movie.title}
              vote={movie.vote_average}
              overview={movie.overview}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
