// import React from "react";
// // import { useParams, useLocation } from "react-router-dom"; // import useParams and useLocation hooks

// // function CardDetails() {
// //   const { id } = useParams(); // get the id parameter
// //   const { state } = useLocation(); // get the state object
// //   const { title } = state; // get the title from state

// //   // fetch the data for the card using the id
// //   // ...

// //   return (
// //     <div>
// //       {/* display the card details */}
// //       <h1>{title}</h1>
// //       <p>{id}</p>
// //       {/* ... */}
// //     </div>
// //   );
// // }
// import { useLocation } from "react-router-dom";

// function CardDetails() {
//   const location = useLocation();
//   const { title } = location.state;

//   return (
//     <div>
//       <h1>Card Details</h1>
//       <p>Title: {title}</p>
//       {/* Add more details or content related to the card */}
//     </div>
//   );
// }

// export default CardDetails;