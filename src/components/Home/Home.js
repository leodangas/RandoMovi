import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./styles/Home.css";
import FetchingMovie from "../Movie/FetchingMovie";
const Home = () => {
  const [findMovie, setFindMovie] = useState(false);
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-wrapper">
          <h1>RANDOMOVI</h1>
          <h2>SUGGEST ME A RANDOM MOVIE TO WATCH</h2>
          <h3>
            RandoMovi is a website made for those, who can't choose which movie
            to watch on a lovely evening, we provide you an engine, which
            suggests you a random movie according to your chosen criteria!
          </h3>
          <button onClick={() => setFindMovie(true)}>SUGGEST ME A MOVIE</button>
        </div>
      </div>
      {findMovie ? <FetchingMovie setFindMovie={setFindMovie}/> : ''}
    </>
  );
};

export default Home;
