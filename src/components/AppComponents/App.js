import React, { Component } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { Corp } from "../Corp/Corp";
import { Shops } from "../Shops/Shops";
import { Delivery } from '../Delivery/Delivery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/corp" component={Corp} />
            <Route path="/shops" component={Shops} />
            <Route path="/delivery" component={Delivery} />
          </Switch>
        <Footer />
    </Router>
  );
}
