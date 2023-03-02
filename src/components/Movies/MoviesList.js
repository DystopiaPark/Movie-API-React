import React from "react";
import MoviesListItem from "./MovieListItem";

const MoviesList = ({ movies }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}>
      {movies.map((movie) => {
        return (
          <MoviesListItem
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            plot={movie.Year}
            movie={movie}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
