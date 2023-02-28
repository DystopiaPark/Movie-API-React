import React from "react";

const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";
const MoviesListItem = ({ title, poster }) => {
  const checkPoster = poster === "N/A" ? noImageFound : poster;
  return (
    <div>
      <h3>{title}</h3>
      <img src={checkPoster} alt={`Movies title is: ${title}`} width={300} />
    </div>
  );
};

export default MoviesListItem;
