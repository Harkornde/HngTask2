import style from "../Css/homepage.module.css";
import imbd from "../Asset/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import apple from "../Asset/PngItem_1381056 1.png";
// Creating Homepage

// console.log(ansApi);
const play = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
      fill="white"
    />
  </svg>
);

function Homepage(props) {
  const styleName = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(https://image.tmdb.org/t/p/original/${props.img})`,
  };

  return (
    <div id={style.homeP} style={styleName}>
      <h1 className={style.tittle} data-testid="movie-title">
       {props.tittle}
      </h1>
      <div className={style.ratesdiv}>
        <img className={style.movimg} alt="imbd" src={imbd} />
        <p className={style.ratings}> 86.0/100 </p>
        <img className={style.appImg} alt="apple" src={apple} />
        <p className={style.ratings_perc}> 97% </p>
      </div>
      <p className={style.movdescrip}>
         {props.description}
      </p>
      <div className={style.hmp_btn}>
        <a href="#">{play}</a>
        <p className={style.hmp_btnP}>WATCH TRAILER</p>
      </div>
    </div>
  );
}

export default Homepage;
