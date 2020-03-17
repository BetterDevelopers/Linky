import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "../src/components/Home";
import Blogs from "./components/Blogs";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Linky</h1>
      </header>
      <nav>
        <Link to="/">Home Page</Link> <Link to="blogs/123">Blogs</Link>
        <Link to="videos/abc">Videos</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Blogs path="blogs/:blogID" />
        <Videos path="videos/:videoID" />
      </Router>
    </div>
  );
}

export default App;
