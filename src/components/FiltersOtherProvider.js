import React, { createContext, useState } from 'react'

export const FiltersOtherContext = createContext();

export const FiltersOtherProvider = props => {
    const [filtersOther, setFiltersOther] = useState({
        releasedFrom: '1900',
        releasedTo: '2021',
        ratedOver: '',
        votesOver: '450',
    })
    return (
        <FiltersOtherContext.Provider value={[filtersOther, setFiltersOther]}>
            {props.children}
        </FiltersOtherContext.Provider>
    )
}