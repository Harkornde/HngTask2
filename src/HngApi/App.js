import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "./Card.js"; // a component that renders a list of cards
import CardDetails from "./CardDetails.js"; // a component that renders a single card

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route path="/card/:id" component={CardDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
