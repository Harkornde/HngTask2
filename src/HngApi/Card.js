import React from "react";
import style from "../Css/card.module.css";
import imbd from "../Asset/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import apple from "../Asset/PngItem_1381056 1.png";

function Card(props) {
  return (
    <div className={style.gridlayout}>
      <div id={style.alldiv}>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Card;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Card() {
//   return (
//     <div>
//       <h2>Card Component</h2>
//       {/* Use Link to navigate to another component */}
//       <Link to="/another">Go to Another Component</Link>
//     </div>
//   );
// }

// export default Card;
