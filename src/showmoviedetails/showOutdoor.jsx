import React from "react";
import { outdoor, ShowOutdoorMovie } from "./outdoor";
import { useNavigate } from 'react-router-dom';

import { useParams } from "react-router-dom";
export function OutdoorPicture() {
    const navigate = useNavigate();
    const { name } = useParams()
    const ticketBook = () => {
        navigate('/BookingSuccess',);
    };

    return <>

        {ShowOutdoorMovie.map((e) => {
            return <>


                <div className='set-pic' >
                    {e.name === name && <img src={e?.backgroundImg} alt="" srcset="" />}</div>

            </>

        })}
        <div>

            {outdoor.map((e) => {

                return e.name === name ?

                    e.subdata.map(e => {
                        return (
                            <>
                                <div className="main-div-set-fun" >
                                    <div className="fun-data-set">

                                        <h1>{e.title}</h1>
                                        <p>{e.duration}</p>
                                    </div>
                                    <div className="fun-btn-set">

                                        <button className="btn-data-set1" onClick={ticketBook}>Book</button>
                                    </div>

                                </div>

                                <div className="fun-rel-loc-set">


                                    <h4>{e.release}</h4>
                                    <h4>{e.location}</h4>

                                </div>




                            </>
                        )
                    }) : <></>

            })}

        </div>


    </>
}
