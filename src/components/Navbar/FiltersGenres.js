import React, { useContext, useEffect, useState} from "react";
import { FiltersGenresContext } from "../FiltersGenresProvider";

const FiltersGenres = (props) => {
  const [activeGenreIndication, setActiveGenreIndication] = useState("+");
  const [activeGenre, setActiveGenre] = useState("");
  const [filtersGenres, setFiltersGenres] = useContext(FiltersGenresContext);

  useEffect(() => {
    let savedGenres = JSON.parse(localStorage.getItem("filters"));
    if(savedGenres !== null) setFiltersGenres(savedGenres);
  }, [])

  useEffect(() => {
    let currentGenre = filtersGenres.find((item) => {return item.id === props.genreId && item.active === true})
    if(currentGenre) {
      setActiveGenre('active-genre')
      setActiveGenreIndication('✓')
    }
    if(!currentGenre) {
      setActiveGenre('')
      setActiveGenreIndication('+')
    }
  }, [filtersGenres, props.genreId])
  
  const modifySelection = () => {
    let savedGenres = JSON.parse(localStorage.getItem("filters"));
    if (savedGenres === null) {
      localStorage.setItem("filters", JSON.stringify(filtersGenres));
    }
    const toggleGenre = filtersGenres.map(item => {
      return item.id === props.genreId ? {...item, active: !item.active} : item
    })
    setFiltersGenres(toggleGenre);
  }

  
  return (
    <div className={`genre-button ${activeGenre}`} onClick={modifySelection}>
      <h1>{activeGenreIndication}</h1>
      <h1>{props.genreName}</h1>
    </div>
    
  );
};

export default FiltersGenres;
