import React, { useContext, useEffect, useState } from "react";
import { FiltersOtherContext } from "../FiltersOtherProvider";

const FiltersOther = (props) => {
  const [filtersOther, setFiltersOther] = useContext(FiltersOtherContext);
  const [, setStoredData] = useState({});
  const [show, setShow] = useState(false);
  const setReleasedFrom = (event) => {
    setFiltersOther({ ...filtersOther, releasedFrom: event.target.value });
  };

  const setReleasedTo = (event) => {
    setFiltersOther({ ...filtersOther, releasedTo: event.target.value });
  };

  const setRatedOver = (event) => {
    setFiltersOther({ ...filtersOther, ratedOver: event.target.value });
  };

  const setVotesOver = (event) => {
    setFiltersOther({ ...filtersOther, votesOver: event.target.value });
  };

  useEffect(() => {
    let userStoredData = JSON.parse(localStorage.getItem("filtersOther"));
    if (userStoredData === null) {
      localStorage.setItem("filtersOther", JSON.stringify(filtersOther));
      setShow(true)
    }
    else {
      setStoredData(userStoredData);
      setFiltersOther(userStoredData);
      setShow(true);
    }
    
  }, []);
  return (
    <>
      {show ? (
        <>
          {" "}
          <h1>Other</h1>
          <h2>Release date (1900-2021)</h2>
          <div className="release-date">
            <input value={filtersOther.releasedFrom} onChange={setReleasedFrom} type="text"></input>
            <input value={filtersOther.releasedTo} onChange={setReleasedTo} type="text"></input>
          </div>
          <div className="other-filters">
            <div className="filters-rating-votes">
              <h2>Movie rating</h2>
              <select onChange={setRatedOver} value={filtersOther.ratedOver}>
                <option value="0">Ignore this filter</option>
                <option value="8">Rated over 8</option>
                <option value="7.5">Rated over 7.5</option>
                <option value="7">Rated over 7</option>
                <option value="6.5">Rated over 6.5</option>
                <option value="6">Rated over 6</option>
              </select>
            </div>
            <div>
              <h2>Total Votes</h2>
              <select onChange={setVotesOver} value={filtersOther.votesOver}>
                <option value="0">Ignore this filter</option>
                <option value="4000">Votes over 100000</option>
                <option value="1500">Votes over 50000</option>
                <option value="450">Votes over 10000</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default FiltersOther;
