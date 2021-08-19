import React, { createContext, useState } from 'react'

export const FiltersContext = createContext();

export const FiltersProvider = props => {
    const [filters, setFilters] = useState({
        genres: '',
        releasedFrom: '1900',
        releasedTo: '2021',
        ratedOver: '',
        votesOver: '450',
        totalPages: '',
        visitedPages: '',
        totalResults: '',
        visitedResults: '',
        totalPageResults: '',
        visitedPageResults: '',
    })
    return (
        <FiltersContext.Provider value={[filters, setFilters]}>
            {props.children}
        </FiltersContext.Provider>
    )
}