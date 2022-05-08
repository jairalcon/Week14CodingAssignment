import React from "react";
import MovieList from "./components/movie-list";
import Movie from "./components/movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  function createMovie(movie) {
    return (
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.title}
        img={movie.imgURL}
        director={movie.director}
        releasedate={movie.releaseDate}
        plot={movie.plot}
      />
    );
  }

  return <div className="posterBG">{MovieList.map(createMovie)}</div>;
}

export default App;