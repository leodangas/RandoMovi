import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Filters from "./Filters";
import FetchingMovie from "../Movie/FetchingMovie";
import "./styles/Navbar.css";
const Navbar = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [findMovie, setFindMovie] = useState(false);
    const history = useHistory();
  return (
      <>
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo" onClick={()=> history.push('/home')}>
          <img
            src="https://vbinnovatives.com/vidvibes_html_v2/assets/icon/favicon/red-theme/apple-touch-icon.png"
            alt="website's logo"
          ></img>
          <h1 className="websites-name">RandoMovi</h1>
        </div>
        <div className="navbar-buttons">
          <button className="filters-button" onClick={()=> setShowFilters(true)}>Filters</button>
          <button className="next-movie-button" onClick={() => setFindMovie(true)}>Next Movie</button>
        </div>
      </div>
    </div>
    {showFilters ? <Filters show={showFilters} setModal={setShowFilters} /> : ''}
    {findMovie ? <FetchingMovie setFindMovie={setFindMovie}/> : ''}
    </>
  );
};

export default Navbar;
