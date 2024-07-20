import React from "react"
import Card from "../compoenents/Card/card"
import { Outdoor } from "../data/movie"

export function Events() {
 return (<>

     <div className='heding-set'>

         <h1> Events </h1>
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
     <div className="content-container">
      <nav>
        <ul>
          <li>Home → Events</li>
        </ul>
      </nav>
      </div>
      <div className="content">
        <h2>Find The Latest and Best Events in yamunanagar Today!</h2>
        <p>
          If lounging on a sofa with a bowl of popcorn has become your daily ritual, you can jazz it up with some live events! Gone are the days when movies were the only source of real entertainment. Now you can take a break from the constant screen time to indulge in some live entertainment near you with the tap of a button. Find a curated list of upcoming events in <strong>yamunanagar</strong> so that you can spot the right event for that perfect weekend.
        </p>

        <h3>How to book an event online?</h3>
        <p>
          Bookmyshow offers a simple, yet seamless experience for browsing, sorting, and booking handpicked events. Just click on the upcoming events of your choice, make the payment through one of the many payment gateways, and you’re good to go!
        </p>
        <p>
          Consider Bookmyshow as a one-stop-shop for all your live entertainment cravings. You have an option to filter the latest events according to category so you can find the same in the favourite category. You can also filter the genre so you can experience comedy, music, action and more, artists for you to watch your favourite performer or venue so you can find the closest events to your home.
        </p>

        <h3>Top 3 Events Categories</h3>
        <p>
          Live events are thoughtfully divided into three main categories.
        </p>
        <ul>
          <li>
            <strong>Comedy events</strong> - If you like to tickle your funny bone, comic relief can be your go-to option. Find the latest <strong>comedy events</strong> by some of yamunanagar’s best comedians. Catch them in <strong>yamunanagar</strong> performing specials, hosting open mics, trying out new sets, and more.
          </li>
          <li>
            <strong>Music shows</strong> - Looking for a way to unwind from the post-work blues? <strong>Music shows</strong> might do the trick! Experience handpicked gigs, bollywood, and concerts from a diverse choice of genres.
          </li>
          <li>
            <strong>Performance/workshops</strong> - For those who want to coddle their senses with something more hands-on, you can book tickets to a live performance or <strong>workshop</strong>. This can be anything from plays to meetups to art workshops and much more.
          </li>
        </ul>

        <h3>A hassle-free live events experience</h3>
        <p>
          Our <strong>online streaming events</strong> in 2024 are carefully organized. This digital spin on events lets you experience all the good stuff through your laptop or smartphone. Not only does this help you skip the pesky traffic jams but also lets you enjoy your favorited events from the safety of your home.
        </p>
        <p>
          Booking tickets has never been more rewarding. BookMyShow aspires to bring to you live experiences in yamunanagar that are worth your time, money, and curiosity. Unlock exciting rewards by using exclusive offers and coupons.
        </p>

        <h3>Get Tickets to the Latest Events in Your yamunanagar</h3>
        <p>
          If you’re feeling lucky, you can become a Superstar with a special loyalty program. Avail exclusive offers and discounts for bookings on selected live events. If that doesn’t impress you, free delivery of merchandise through Fandom will certainly get you hooked. Going out with your team from work? Corporate vouchers will give you the best bang for your buck.
        </p>
        <p>
          Wait no more! Find the next event in yamunanagar and book your tickets now!
        </p>
    </div>
 </>
 )
}