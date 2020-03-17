import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "../src/components/Home";
import Bookmarks from "./components/Bookmarks";
import UrlParams from "./components/UrlParams";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Linky</h1>
      </header>
      <nav>
        <Link to="/">Home Page</Link> <Link to="bookmarks">Bookmarks</Link>
        <Link to="url/abc">URL Param example</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Bookmarks path="bookmarks" />
        <UrlParams path="url/:params" />
      </Router>
    </div>
  );
}

export default App;
