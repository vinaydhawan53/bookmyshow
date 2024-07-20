 import React from "react"
 import { Funmovie } from "./movie"
 import Card from "../compoenents/Card/card"
 
 export function Funmoviedata() {
    return (<>

        <div className='heding-set'>

            <h1>Explore fun Activities</h1>
            <div className='main-div'>
                <div className='inner-div'>
                    {Funmovie.map((element, index, arr) => {
                        return <>

                            <Card name={element.name} title={element.Title} img={element.img} link={element.link} />
                        </>

                    })}

                </div>
            </div>
        </div>














    </>
    )
}