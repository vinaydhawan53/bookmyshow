import React, { useState } from 'react'
import { moviesData } from '../data/movie'

 export function SearchMovie(e) {
const [searchOutput,setSearchOutput]=useState([]);


 const search = (e) => {
    moviesData.filter((element, i, arr) => {
        const localTypeValue = e?.target?.value.toLowerCase();
        const movieTitle = element?.Title?.toLowerCase()
        const check = movieTitle?.includes(localTypeValue)
        if(check){
            setSearchOutput(element)
            
            // console.log(element);
        }
        else{
        }
        
    })
}

console.log(searchOutput, 'ELEEL')
    return (
        
            <div className="one">
                <div className="search">


                    <i className="fa-solid fa-magnifying-glass icon  "> </i>

                    <input onChange={search} type="text" placeholder="Search for Movies,Events Plays,Sport and Activities" className="search-input" />
        
                </div>
            </div>
        
    )
}

export default SearchMovie
