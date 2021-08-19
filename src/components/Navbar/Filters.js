import React, { useContext} from "react";
import { useTransition, animated } from "react-spring";
import { FiltersGenresContext } from "../FiltersGenresProvider";
import { FiltersOtherContext } from "../FiltersOtherProvider";
import { FiltersContext } from "../FiltersProvider";
import { GenresContext } from "../GenresProvider";
import FiltersGenres from "./FiltersGenres";
import FiltersOther from "./FiltersOther";
import "./styles/Filters.css";
const Filters = (props) => {
  const [genres,] = useContext(GenresContext);
  const [, setFilters] = useContext(FiltersContext);
  const [filtersGenres, setFiltersGenres] = useContext(FiltersGenresContext);
  const [filtersOther,] = useContext(FiltersOtherContext);

  //Defining transition for modal's appearance
  const transition = useTransition(props.show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 500 },
  });

  const selectAllGenres = () => {
    const selectGenres = filtersGenres.map((item) => {return {id: item.id, active: true}})
    setFiltersGenres(selectGenres);
  }
  const deSelectAllGenres = () => {
    const selectGenres = filtersGenres.map((item) => {return {id: item.id, active: false}})
    setFiltersGenres(selectGenres);
  }
  const saveChanges = () => {
    if(Number(filtersOther.releasedFrom < 1900 || filtersOther.releasedFrom > 2021)) alert('Release date FROM must be greater than 1900 and lower than 2021');
    else if(Number(filtersOther.releasedTo < 1900 || filtersOther.releasedTo > 2021)) alert('Release date TO must be greater than 1900 and lower than 2021');
    else if(Number(filtersOther.releasedFrom) > Number(filtersOther.releasedTo)) alert('Release date FROM must be lower than release date TO');
    else if(isNaN(filtersOther.releasedFrom) || isNaN(filtersOther.releasedTo)) alert('Only write numbers in the date');
    else {
      setFilters({genres: filtersGenres, releasedFrom: filtersOther.releasedFrom, releasedTo: filtersOther.releasedTo, ratedOver: filtersOther.ratedOver, votesOver: filtersOther.votesOver, totalPages: '', totalResults: '', visitedPages: '', visitedPageResults: ''})
      localStorage.setItem('filtersOther', JSON.stringify(filtersOther))
      localStorage.setItem('filters', JSON.stringify(filtersGenres));
      props.setModal(false);
    }
  }
  return (
    <div className="filters-bg">
      {transition((style, item) =>
        item ? (
          <animated.div className="filters-container" style={style}>
            <div className="filters-header">
              <h1>FILTERS</h1>
              <h2 onClick={() => props.setModal(false)}>✕</h2>
            </div>
            <div className="filters-sections">
              <div className="filters-genres">
                <h1>Genres</h1>
                <div className="genres">
                  {genres.map((item) => {
                    return (
                      <FiltersGenres genreName={item.name} genreId={item.id} key={item.id}/>
                  )})}
                  <button className="select-all-button" onClick={selectAllGenres}>Select All</button>
                  <button className="clear-button" onClick={deSelectAllGenres}>Clear All</button>
                </div>
              </div>
              <div className="filters-other">
                <FiltersOther/>
                <button className="save-changes" onClick={saveChanges}>Save Changes</button>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Filters;
