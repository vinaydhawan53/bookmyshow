import React, { useState } from 'react';
// import './CitySelector.css';

const popularCities = [
    { name: 'Mumbai', icon: '🏙️' },
    { name: 'Delhi-NCR', icon: '🏛️' },
    { name: 'Bengaluru', icon: '🌆' },
    { name: 'Hyderabad', icon: '🏰' },
    { name: 'Chandigarh', icon: '🏢' },
    { name: 'Ahmedabad', icon: '🕌' },
    { name: 'Pune', icon: '🏙️' },
    { name: 'Chennai', icon: '🏯' },
    { name: 'Kolkata', icon: '🏤' },
    { name: 'Kochi', icon: '🏝️' }
];

const otherCities = [
    'Aalo', 'Addanki', 'Agar Malwa', 'Ahmednagar', 'Akbarpur', 'Alakode', 'Alibaug', 'Abohar', 'Adimali', 'Adilabad', 
    'Agartala', 'Aizawl', 'Ahore', 'Akaltra', 'Achampet', 'Adoni', 'Ahmedgarh', 'Akaltra', 'Akola', 'Akot'
    // Add more cities as needed
];

const CitySelector = () => {
    const [showAllCities, setShowAllCities] = useState(false);

    return (
        <div className="city-selector">
            <div className="search-bar">
                <input type="text" placeholder="Search for your city" />
                
            </div>
            <div className="city-list">
                <h3>Popular Cities</h3>
                <div className="popular-cities">
                    
                    {popularCities.map((city, index) => (
                        <div className="city" key={index}>
                            <div className="icon">{city.icon}</div>
                            <div className="name">{city.name}</div>
                        </div>
                    ))}
                </div>
                <h3>Other Cities</h3>
                <div className={`other-cities ${showAllCities ? 'show' : 'hide'}`}>
                    {otherCities.map((city, index) => (
                        <div className="city" key={index}>
                            <div className="name">{city}</div>
                        </div>
                    ))}
                </div>
                <button className="toggle-button" onClick={() => setShowAllCities(!showAllCities)}>
                    {showAllCities ? 'Hide All Cities' : 'Show All Cities'}
                </button>
            </div>
        </div>
    );
};

export default CitySelector;
