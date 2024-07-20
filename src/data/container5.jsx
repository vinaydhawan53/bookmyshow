  import React from "react"
  import { TrendingSearch } from "./movie"
  import Card from "../compoenents/Card/card"
  
  export function Treding() {
    // console.log(moviesData);
    return (<>


        <div className="trending-searches">
            <h2>Trending Searches Right Now</h2>
            <div className="search-items">
                {TrendingSearch.map((item, index) => (
                    <div className="search-item" key={index}>
                        <p>{item.name}</p>
                        <span>{item.TItle}</span>
                    </div>
                ))}
            </div>
        </div>


    </>
    )





}