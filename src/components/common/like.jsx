import React from "react";

const Like = ({ movie, onClick }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={() => onClick(movie)}
      className={movie.like ? "fa fa-heart" : "fa fa-heart-o"}
    ></i>
  );
};

export default Like;
