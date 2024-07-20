import React from "react"
import Card from "../compoenents/Card/card"
import { Funmovie } from "../data/movie"

export function Activities() {
   return (<>

       <div className='heding-set'>

           <h1>Explore fun Activities</h1>
           <div className='main-div'>
               <div className='inner-div'>
                   {Funmovie.map((element, index, arr) => {
                       return <>

                           <Card name={element.name} title={element.Title} img={element.img} link={element.link} />
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
            <h1>Get Ready to Have a Great Time With Activities in Yamunanagar</h1>
            <p>
                BookMyShow is home to your search for world-class activities to do in Yamunanagar. 
                So, clear your mind after a long, hectic day by knowing what's happening near you. 
                There are many fun things to do in your Yamunanagar like watching shows, exploring 
                the outskirts of the city, watching popular sports, clubbing, visiting amusement 
                and theme parks.
            </p>
            <p>
                We, at BookMyShow, team up with well-known organizers and travel groups to provide 
                you with the live activities that are happening in 2024. There are various gift 
                cards, coupon offers, and rewards that you'll receive when you plan your things 
                to do in 2024 with us. Turn your boredom into something extravagant and get to 
                know all the details about outdoor activities near you.
            </p>

            <h2>Exciting Activities You Should Venture In Yamunanagar!</h2>
            <p>
                Yamunanagar is the best place to find an enormous variety of activities. We 
                promise a unique experience that you will never forget. Get social - get active - 
                get going!
            </p>
            <p>
                As your ultimate guide to entertainment and leisure, BookMyShow offers a plethora 
                of activities to cater to every interest and mood. Let's dive into the exciting 
                activities awaiting you:
            </p>
            <ul>
                <li>
                    <strong>Adventure:</strong> 
                    From bungee jumping and skydiving to trekking and river rafting, there's an 
                    adventure for everyone. Unleash your inner daredevil and embark on an 
                    unforgettable escapade.
                </li>
                <li>
                    <strong>Gaming:</strong> 
                    Calling all gamers! Whether you're a fan of virtual reality, console gaming, or 
                    interactive escape rooms, you'll find a variety of gaming events and tournaments 
                    to test your skills and have a blast with fellow gaming enthusiasts.
                </li>
                <li>
                    <strong>Amusement Parks:</strong> 
                    We offer some of the most thrilling and family-friendly amusement parks in 
                    Yamunanagar. Enjoy rides, entertainment, and captivating shows that will leave 
                    you with cherished memories.
                </li>
                <li>
                    <strong>Resorts:</strong> 
                    Indulge in a luxurious getaway at some of the finest resorts in Yamunanagar. We 
                    provide a curated selection of resorts where you can relax, rejuvenate, and 
                    unwind in serene surroundings. Whether you prefer a beachfront retreat, a 
                    mountainous hideaway, or a spa retreat, find the perfect resort to escape the 
                    hustle and bustle of daily life.
                </li>
                <li>
                    <strong>Food and Drinks:</strong> 
                    Treat your taste buds to a culinary adventure with array of food and drink 
                    experiences. Discover exquisite delicacies, wine tastings, and cooking workshops 
                    that will tantalize your senses and satisfy your gastronomic cravings.
                </li>
                <li>
                    <strong>Tourist Attractions:</strong> 
                    If you're a traveler or a local looking to explore the hidden gems near 
                    Yamunanagar, Discover and book tickets to popular tourist attractions, 
                    historical landmarks, museums, and cultural experiences. Dive into the rich 
                    heritage and vibrant culture near Yamunanagar through a myriad of engaging 
                    activities.
                </li>
                <li>
                    <strong>Nightlife & Parties:</strong> 
                    Get ready to dance the night away at the hottest parties in town. BookMyShow 
                    keeps you updated on the most happening nightlife events, concerts, and music 
                    festivals. Grab your friends, put on your dancing shoes, and create 
                    unforgettable memories on the dance floor.
                </li>
            </ul>

            <h2>Check Out Our Handpicked List Of Activities</h2>
            <p>
                Craving excitement, laughter, and unforgettable memories? Look no further than your 
                own Yamunanagar! Discover the best activities in Yamunanagar, handpicked just for 
                you. We share in-depth information and offer you the best price for the online 
                booking of the tickets. Find everything you need to know by clicking on the 
                activity.
            </p>
            <p>
                From heart-pounding drops on thrilling roller coasters to mouth watering street 
                food! We offer a diverse range of activities to cater your passions and explore new 
                interests. Unleash your creativity, expand your horizons, and engage in enriching 
                experiences that enhance your personal growth. There are a plethora of fun 
                activities such as Neck Park, Aquatica Theme Park - Kolkata, Shubham's Adventure, 
                Adlabs Imagica Theme Park, Udan Khatola Ropeways - Gujarat Darshan & Sky Jumper 
                Trampoline Park - Pune. You can find the package or experience that is the best fit 
                for you.
            </p>

            <h2>Exclusive Activity Ticket Offers Available Just for You</h2>
            <p>
                Do not wait any further, we are running out of tickets pretty fast, explore the 
                activities section and embark on unforgettable experiences that will leave you 
                entertained and rejuvenated.
            </p>
            <p>
                We ensure that you receive exclusive discounts when you book with us in Yamunanagar. 
                Become a superstar, and we've got you covered under superstar offers. A superstar 
                gets exclusive offers on live events, free delivery of fan merchandise, free 
                cancellation, and many such fringe benefits.
            </p>
            <p>
                We offer a safe payment gateway along with multiple payment options. Only at 
                BookMyShow will you come across these fantastic offers and gift cards. Not just 
                this, we also offer rewards and paybacks on a few selected cards.
            </p>
            <p>
                Get ready and book your online tickets for our activities in Yamunanagar today!
            </p>
        </div>












   </>
   )
}