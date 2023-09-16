import React from "react";
import style from "../Css/card.module.css";
import imbd from "../Asset/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import apple from "../Asset/PngItem_1381056 1.png";
// import { Link } from "react-router-dom"

function Card(props) {
  return (
    <div className={style.gridlayout}>
      <div id={style.alldiv}>
        <div>
          {/* <Link
            to={{
              pathname: `/card/${props.id}`, // pass the id as a parameter
              state: { title: props.title }, // pass the title as state
            }}
          > */}
          <div data-testid="movie-card">
            <div data-testid="movie-poster">
              <img
                alt="Movie poster"
                className={style.posterImg}
                src={props.img}
              />
            </div>

            <p className={style.genres} data-testid="movie-release-date">
              {props.release}
            </p>

            <h1 className={style.tittle} data-testid="movie-title">
              {props.title}
            </h1>

            <div>
              <div className={style.ratesdiv}>
                <img className={style.movimg} alt="imbd" src={imbd} />
                <p className={style.ratings}> 86.0/100 </p>
                <img className={style.appImg} alt="apple" src={apple} />
                <p className={style.ratings_perc}> 97% </p>
              </div>
              <p className={style.genres}>Action, Adventure, Drama </p>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
export default Card;
// card - [data-testid= "movie-card"]
// movie poster - [data-testid= "movie-poster"]
// movie title - [data-testid= "movie-title"]
// movie release date - [data-testid= "movie-release-date"]
