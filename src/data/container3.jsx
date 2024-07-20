  import React from "react"
   import { Outdoor } from "./movie"  
   import Card from "../compoenents/Card/card"
  
  export function OutdoorEvents() {
    return (<>

        <div className='heding-set'>

            <h1>Outdoor Events

            </h1>
            <div className='main-div'>
                <div className='inner-div'>
                    {Outdoor.map((element, index, arr) => {
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