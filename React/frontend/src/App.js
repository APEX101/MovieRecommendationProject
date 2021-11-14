import "./App.css";
import React from "react";
import HomePageRender from "./Screens/HomePageRender";
import SearchBar from "./Components/SearchBar";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="appheading">
        <h1>Our Top Recommended</h1>
      </div>

      <HomePageRender />
    </div>
  );
}

export default App;
