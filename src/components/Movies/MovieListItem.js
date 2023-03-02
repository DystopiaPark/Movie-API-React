import React from "react";
import MovieInfo from "./MovieInfo";

const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";
const MoviesListItem = ({ movie, title, poster }) => {
  const checkPoster = poster === "N/A" ? noImageFound : poster;
  return (
    <div
      style={{
        border: "2px solid black",
        maxWidth: 300,
        margin: "1rem",
        paddingBottom: "2rem",
        textAlign: "center",
      }}
    >
      <h3
        onClick={() => {
          MovieInfo.style.display = "none";
        }}
      >
        {title}
      </h3>
      <img src={checkPoster} alt={`Movies title is: ${title}`} width={300} />
      <MovieInfo movie={movie} />
    </div>
  );
};

export default MoviesListItem;
