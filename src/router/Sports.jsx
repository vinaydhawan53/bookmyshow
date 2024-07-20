import React from "react"
import Card from "../compoenents/Card/card"
import { Outdoor } from "../data/movie"

export function Sports() {
 return (<>

     <div className='heding-set'>

         <h1> Sports </h1>
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
      
      <h1>Obtain Information About all Upcoming Sports Events In Ahmedabad</h1>
      <p>
        India is a country where sportspersons receive immense love from fans and spectators. Sports lovers in this country are the prime reason for the enormous popularity of almost all sports in India. Although <strong>Cricket</strong> is a religion for the Indians, there is a sizable fan base of other sports events.
      </p>
      <p>
        You will know about upcoming sports events near you in 2024 on BookMyShow. Apart from obtaining detailed information, you can also book tickets for sports like <a href="#">Run for the Ocean - Get Medal by Courier</a>, <a href="#">Freedom Virtual Marathon - Get Trophy by Courier & International Virtual Marathon</a> happening in Ahmedabad without any hassle. You can take part and enjoy the experience live.
      </p>
      
      <h2>Witness or Take Part in Different Adrenaline-Boosting Sports Match in Ahmedabad</h2>
      <p>
        Witnessing live sports being at the stadium is a different experience altogether for the fans or sports lovers. On BookMyShow, you will get information about different sports categories. Major sports tournaments and leagues that are going to take place in Ahmedabad in 2024 are expected to be updated soon, as they are the most enthralling events of the year.
      </p>
      <p>
        Sportspersons strive to deliver their best performance and entice spectators at the stadiums. No matter which sport makes you crazy, you will be able to book sports event tickets hassle-free from our website and witness the matches in front of your eyes. You can even take part in several <strong>e-sports</strong> and play online from the convenience of your home after booking the sports tickets.
      </p>
      
      <h2>Avail Upcoming Sports Event Rewards and the BookMyShow Exclusive Offers</h2>
      <p>
        Not many are lucky enough to win the superstar offers every time, but if luck is on your side, nothing can prevent you from acquiring the same and witnessing upcoming sports matches in Ahmedabad at no cost! Besides receiving sports venue offers, coupons, and corporate vouchers for booking upcoming sports events, you also receive home delivery of merchandise and premium concierge service. What could be better than this?
      </p>
      <p>
        To view the Superstar badge on your BookMyShow profile, you have to make 10 bookings in the last 365 days, and the transaction amount has to be at least Rs.100. If you book tickets for a sports event in Ahmedabad you may even receive lucrative rewards and gift cards.
      </p>
      
      <h2>Stay Up-to-date with the Sports events in 2024 and Participate</h2>
      <p>
        On BookMyShow, you will find listings of different upcoming sports events and the time, date, and ticket price. You get the remarkable opportunity to register and participate in <strong>Badminton</strong>, <strong>Basketball</strong>, <strong>Football</strong>, and Fitness Training sessions, Ludo Tournament, virtual cycling, boxing training sessions, national and international virtual run, <strong>Marathon</strong>, etc.
      </p>
      <p>
        You will receive notifications about every sporting event you wish to participate in if you download the BookMyShow app on your phone. You can now get all the latest sports news and events in one place and stay up-to-date.
      </p>
      <p>
        Come, be a part of the sporting family! Enjoy all the sports events by booking tickets and getting regular updates for your favorite sports and teams!
      </p>
    </div>

 </>
 )
}