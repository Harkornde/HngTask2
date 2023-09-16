

import React, { useEffect, useState } from "react";
import Homepage from "./HngApi/Homepage";
import "./App.css";
import Card from "./HngApi/Card";
import style from "./Css/card.module.css";
import Pagination from "react-paginate";

function App() {
  const [popular, setPopular] = useState([]);
  const [mov, movName] = useState([]);
  const [desmovie, desPopular] = useState([]);
  const [card, setCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const itemsPerPage = 10; // Number of items per page

  const fetchPopular = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=af7e4b96fb29cafd40930854b445b800&language=en-US&page=1";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const cardata = data.results;
      setCard(cardata);

      if (response.ok && data.results && data.results.length > 0) {
        const movieUrl = data.results[0].poster_path;
        const movietitl = data.results[0].title;
        const movieOver = data.results[0].overview;

        setPopular(movieUrl);
        movName(movietitl);
        desPopular(movieOver);
      } else {
        throw new Error("No movies found");
      }
    } catch (err) {
      console.error(err);
      alert(`${err.message} data\n please reload`);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedCards = card.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  function check(res) {
    return (
      <Card
        key={res.id}
        img={`https://image.tmdb.org/t/p/original/${res.poster_path}`}
        release={res.release_date}
        title={res.title}
      />
    );
  }

  return (
    <div className="App">
      <main>
        <Homepage img={popular} tittle={mov} description={desmovie} />

        <div className={style.featurmov}>
          <h3 className={style.featurmovH}>Featured Movie</h3>
          <a href="#">See more</a>
        </div>

        <div className={style.gridlayout}>{displayedCards.map(check)} </div>

        <Pagination
          pageCount={Math.ceil(card.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;
