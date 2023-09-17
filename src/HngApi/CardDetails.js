// import React from "react";
// import { useParams, useLocation } from "react-router-dom"; // import useParams and useLocation hooks
// import { useParams } from "react-router-dom";

// function CardDetails() {
//   const { id } = useParams();
//   const { title } = window.history.state;

//   // Fetch the data for the card using the id
//   // ...

//   return (
//     <div>
//       {/* Display the card details */}
//       <h1>{title}</h1>
//       <p>{id}</p>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// export default CardDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the movie ID from the URL

function CardDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch detailed information for the movie using the movie ID
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=af7e4b96fb29cafd40930854b445b800&language=en-US`
        );

        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        } else {
          throw new Error("Movie not found");
        }
      } catch (err) {
        console.error(err);
        // Handle errors, e.g., display a message or redirect to an error page
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {/* Render other movie details as needed */}
    </div>
  );
}

export default CardDetails;