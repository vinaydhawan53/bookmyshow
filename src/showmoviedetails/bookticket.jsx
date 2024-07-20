import React, { useEffect, useState } from "react";
import { Bookticket, theaterdata } from './bookticketdata'
import { useLocation, useNavigate } from "react-router-dom";
export function Booking() {

    const [movieData, setMovieData] = useState()

    const arr = [1,2,3,4];
    const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thrus', 'Fri', 'Sat']

    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(location?.state){
            setMovieData(location?.state)
        }

    }, [location?.state])
    console.log(location.state, 'LoCATION')
    
    const handleClick = (time) => {
navigate('/select', {state : {state: movieData,time: time}})
    }

    const date = new Date()

    console.log(date.getDay())

    

    return (
        <div>
            <h2>{movieData?.title}</h2>

            <div className="date-con-set">
                <div className="set">
{arr.map((e,idx) => {
    return(  <div className="date-container">

        {console.log(date.getDay() )}
      <div className="day">{ idx === 0 ? weekNames[(date.getDay())] : weekNames[date.getDay() + idx]}</div>
      <div className="date">{idx === 0 ? date.getDate() : date.getDate() + idx}</div>
      <div className="month">July</div>
  </div>)
})}
                    {/* <div className="date-container">


                        <div className="day">mon</div>
                        <div className="date">22</div>
                        <div className="month">July</div>
                    </div>
                    <div className="date-container">
                        <div className="day">tue</div>
                        <div className="date">23</div>
                        <div className="month">July</div>
                    </div>
                    <div className="date-container">
                        <div className="day">wed</div>
                        <div className="date">24</div>
                        <div className="month">July</div>
                    </div><div className="date-container">
                        <div className="day">Thu</div>
                        <div className="date">25</div>
                        <div className="month">July</div>
                    </div> */}
                </div>
                <div className="option">
                    <div className="option-con1">

                        <select name="" id="">Punjabi-2D
                            <option value="">punjabi-2D</option>
                            <option value="">Punjabi-3D</option>
                        </select>
                    </div>
                    <div className="option-con1">
                        <select name="" id=""><option value="">Filter Prize Range</option>
                            <option value="">0-200</option>
                            <option value="">201-300</option>
                            <option value="">301-500</option>
                        </select>

                    </div>
                    <div className="option-con1">
                        <select name="" id=""><option value="">Filter show Timing</option>
                            <option value="">Morning</option>
                            <option value="">Afternoon</option>
                            <option value="">Evening</option>
                            <option value="">Night</option>

                        </select>

                    </div>
                    <div className="option-con1">
                        <i className="fa-solid fa-magnifying-glass icon  "> </i>
                    </div>

                </div>

            </div>

            <div className="Theater-data">

            {theaterdata.map((theater, index, arr) => {
                console.log(theater, 'ABACD')
                return (
                    <>  <div className="show-set">

                        <div key={index} className="theater">
                            <h3>{theater.theater}</h3>
                            <p>{theater.amenities.join(', ')}</p>
                        </div>
                        <div className="showtimes">
                            {theater.showtimes.map((time, i) => (
                                <button key={i} onClick={() => handleClick(time)} className="showtime">{time}</button>
                            ))}
                        </div>
                    </div>
                    </>)
            })}

            </div>
        </div>
    );


};




