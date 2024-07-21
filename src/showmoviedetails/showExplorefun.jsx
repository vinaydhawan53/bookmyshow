import React from "react";
import { Fundata, ShowfunMovie } from "./fundata";
import {  useNavigate } from 'react-router-dom';

import { useParams } from "react-router-dom";
export function FunPicture() {
    const navigate = useNavigate();
    // const location = useLocation();

    const ticketBook = () => {
        navigate('/BookingSuccess',);
      };

    const { name } = useParams()

    return <>

        {ShowfunMovie.map((e) => {
            return <>


                <div className='set-pic' >
                    {e.name === name && <img src={e?.backgroundImg} alt="" srcset="" />}</div>



            </>

        })}
        <div>

            {Fundata.map((e) => {

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
