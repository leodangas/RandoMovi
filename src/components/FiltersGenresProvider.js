import React, { createContext, useState } from 'react'

export const FiltersGenresContext = createContext();

export const FiltersGenresProvider = props => {
    const [filtersGenres, setFiltersGenres] = useState([
        {id: 28, active: false},
        {id: 12, active: false},
        {id: 16, active: false},
        {id: 35, active: false},
        {id: 80, active: false},
        {id: 99, active: false},
        {id: 18, active: false},
        {id: 10751, active: false},
        {id: 14, active: false},
        {id: 36, active: false},
        {id: 27, active: false},
        {id: 10402, active: false},
        {id: 9648, active: false},
        {id: 10749, active: false},
        {id: 878, active: false},
        {id: 53, active: false},
        {id: 10752, active: false},
        {id: 37, active: false},
    ])
    return (
        <FiltersGenresContext.Provider value={[filtersGenres, setFiltersGenres]}>
            {props.children}
        </FiltersGenresContext.Provider>
    )
}