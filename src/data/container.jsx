import React from 'react'
import { moviesData } from './movie'

import Card from '../compoenents/Card/card'



 export function  Container() {
    return (<>

        <div className='heding-set'>

            <h1>Recomended movie</h1>
            <div className='main-div'>
                <div className='inner-div'>
                    {moviesData.map((element, index, arr) => {
                        return <>
                            <Card img={element.img} name={element.Genre} title={element.Title} link={element.link} />
                        </>
                    })}

                </div>
            </div>
        </div>




    </>
    )
}



