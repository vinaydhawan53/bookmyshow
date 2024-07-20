import React from 'react'
import Card from '../compoenents/Card/card'
import { moviesData } from '../data/movie'
 export function  MoviesComponent () {
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

        <div className="content-container">
      <nav>
        <ul>
          <li>Home → Movies</li>
        </ul>
      </nav>
    </div>
      <div className="content">
        <h2>Enjoy Online Ticket Booking for Movies in Yamunanagar With BookMyShow</h2>
        <p>
          If you are planning for movie ticket bookings for the latest movies in Mumbai, don't look any further. Now it is easy to get on with online ticket booking with BookMyShow. Your one-stop solution for movies to watch this weekend. Everyone enjoys watching their favorite movies on the big screen, and the excitement of watching it with friends is unparalleled. If you have been eagerly waiting for a movie that you can watch with your friends and family, now you know where to get the tickets from. When you watch a film in a cinema theatre, you get to watch it on a massive screen with surround-sound, and that enhances your movie-watching experience. Thus, allowing you to be a part of the actual movie. Get to know about all movies and movie trailers to watch here. Also, know how to book movie tickets.
        </p>

        <h3>Latest Movies To Watch in Yamunanagar With Family And Friends</h3>
        <p>
          Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies to be released with the biggest star cast. Enjoy your favourite movie, not just with your friends, but in a cinema hall Mumbai that will be filled with like-minded people. Be a part of everyone's reaction. Dates are already announced, and all you need to do is book the tickets for the preferred date so that you don’t end up missing the first-day first show! Don’t worry we have the list of shows near you and movie showtimes.
        </p>

        <h3>Upcoming Bollywood & Hollywood Movies That You Can’t Miss</h3>
        <p>
          Have you checked out the latest movie reviews of some of the best Hollywood movies? If so, we bet you would want to watch them all in the nearest movie theatre! With the anticipation of the release of <strong>Kalki 2898 AD</strong> & <strong>Sarfira</strong>, who would like to miss the first-day first show experience? The Hollywood movies running in cinemas now are already making the audience want for more, and with the new releases happening in the coming months, we recommend booking the tickets now in Mumbai. Check out all the latest movie trailers here!
        </p>

        <h3>Exciting Tollywood & Kollywood Movies To Book Tickets</h3>
        <p>
          Just like <strong>Bollywood</strong> and <strong>Hollywood movies</strong>, <strong>Tollywood</strong> seems to have a few good movie showtimes as well. You can plan for movies to watch this Friday with these Tollywood movies because the star cast is superb, and the storylines of these movies have already started making news. It will be super interesting to watch. Keep an eye on the release date of in Mumbai.
        </p>

        <h3>The Joy Of Movie Tickets Bookings with Just a Few Clicks</h3>
        <p>
          Grab on your popcorn because there are many movies to watch today in Mumbai. If you want to save some money, don't miss out on our movie offers and discounts. Check out the movies running in cinemas time, and call all your friends to enjoy the best movie-watching experience together. There are many big releases in the pipeline, and it is expected that these movies will have the perfect casting and direction. Get ready for upcoming movies in theatres.
        </p>

        <p>
          Don't wait anymore and book your movie tickets from BookMyShow today at the best price! Your access to your favourite movie in Mumbai is only a click away!
        </p>
      </div>




    </>
    )
}
