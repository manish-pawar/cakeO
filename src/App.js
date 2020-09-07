import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Services from "./Services";
import Order from "./Order";
import Contact from "./Contact";
import Navbar from "./Navbar";
import CakePage from "./CakePage";
import { Switch, Route, Router, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/cake/:id" component={CakePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
