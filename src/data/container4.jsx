  import React from "react"
  import { LaughterTherapy } from "./movie" 
  import Card from "../compoenents/Card/card"
  
  
  export function LaughterShow() {
    // console.log(moviesData);
    return (<>

        <div className='heding-set'>

            <h1>Laughter Therapy </h1>
            <div className='main-div'>
                <div className='inner-div'>
                    {LaughterTherapy.map((element, index, arr) => {
                        return <><div className='img-con1'>
                            <Card name={element.name} title={element.Title} img={element.img} link={element.link}/>

                        </div>

                        </>

                    })}

                </div>
            </div>
        </div>
    </>
    )
}