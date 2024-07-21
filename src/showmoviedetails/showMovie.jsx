import { useParams , useNavigate} from 'react-router-dom'
import { AboutData, castmovie, crewMovieData, ShowDetailMovie } from './moviesdata'

import React from 'react'

export function Moviesclick() {
  const navigate = useNavigate()
  
  const { name } = useParams()

  const handleNavigate = (route,data) => {
    navigate( route,{ state: data})
  }
  return <>

    {ShowDetailMovie.map((element, i) => {
      return (

        <div className='big-container' style={{ backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${element.name === name && element?.backgroundImg})` }}>

          {element.name === name && element?.data?.map((movie, i, a) => {
            console.log(movie.imagesrc, 'IMAGE')
            return (<>
              <div className="movie-card">
                <img src={movie.imagesrc} alt={movie.title} className="movie-image" />
              </div>
              <div className="movie-details">
                <h1>{movie.title}</h1>
                <div className="rating">
                  <div className='movie-rating'>
                    <p>⭐</p>
                    <h5>8.2/10</h5>
                    <h6>(26.4k votes)  </h6>


                  </div>
                  <button className='btn-set'>rate now</button>

                  {/* <>⭐ {movie.rating}/10 ({movie.votes.toLocaleString()} Votes)</> */}
                </div>
                <div className="format-lang">
                  <h5>{movie.format}</h5>
                  <h5>{movie.language}</h5>
                </div>
                <div className="additional-info">
                  <p>{movie.duration}</p>
                  {/* <p>{movie.genre.join (',  ') }</p> */}
                  <p>{movie.certificate}</p>
                  <p>{movie.release_date}</p>
                </div>
                {/* <a href link><button className="book-tickets-button">Book tickets</button> </a> */}
                {/* <Link to={{pathname: "/bookticket", state: movie}}><button className="book-tickets-button">Book tickets</button></Link> */}
                <button className="book-tickets-button" onClick={() => handleNavigate('/bookticket', movie)}>Book tickets</button>
              </div>
            </>)

          }

          )
          }

        </div>
      )
    })}






    <div className='about-sec'>
    {AboutData.map((e) => {

return e.name === name ?
  e.Subdata.map(e => {
    // console.log(e, 'SUB DATA')
    return (
      <>
        <h1>{e.title}</h1>
        <p>{e.details}</p>


        
      </>
    )
  }) : <></>

})}





      {/* <h1>About the movie</h1>
      <p>A battle of wits begins as Fateh joins the police force and meets his charming boss, Pooja, sparking a romantic comedy of unexpected twists. Will Pooja fall into Fateh`s honey trap, or will Cupid`s arrow lead to real love as they embark on an important mission in this rib-tickling affair?</p> */}


    </div>
    <div className='cast'>

      <h1>Cast</h1>
      <div className='cast-sec'>
        {castmovie.map((e) => {

          return e.name === name ?
            e.subData.map(e => {
              console.log(e, 'SUB DATA')
              return (
                <>
                  <div className='picture'>
                    <img src={e.img} alt="" />
                    <h5>{e.title}</h5>
                    <p>{e.work}</p>



                  </div>
                </>
              )
            }) : <></>

        })}

      </div>
    </div>

    <div className='cast'>

      <h1>crew</h1>
      <div className='cast-sec'>
        {crewMovieData.map((e) => {

          return e.name === name ?
            e.subData.map(e => {
              console.log(e, 'SUB DATA')
              return (
                <>
                  <div className='picture'>
                    <img src={e.img} alt="" />
                    <h5>{e.title}</h5>
                    <p>{e.work}</p>



                  </div>
                </>
              )
            }) : <></>

        })}

      </div>
    </div>
  </>

}


