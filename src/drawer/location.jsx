import React, { useState } from 'react';

import {  Modal } from "flowbite-react";
import CitySelector from '../ni';


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

export function Show1() {
    const [openModal, setOpenModal] = useState(false);
    const [showAllCities, setShowAllCities] = useState(false); 
    const [email, setEmail] = useState('');
    const [selectedCity, setSelectedCity] = useState('')

  
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }

    console.log(selectedCity, 'CITY')

    const handleSelectCity = (city) => {
        setSelectedCity(city)
        onCloseModal(false)
    }
  
    return (
      <>
      <select onClick={() => setOpenModal(true)}  > <option value={selectedCity}>{selectedCity ? selectedCity : 'location' }</option> </select>
      <Modal show={openModal} size="md" onClose={onCloseModal}  className='my-modal'>
     
        <Modal.Body>

        <div className="city-selector">
            <div className="search-bar">
                <input type="text" placeholder="Search for your city" />
                 <div className='cross-con'> 
            <i onClick={onCloseModal} class="fa-solid fa-xmark"></i>
            </div>
         
                
            </div>
            <div className="city-list">
                <h3>Popular Cities</h3>
                <div className="popular-cities">
                    
                    {popularCities.map((city, index) => (
                        <div className="city" onClick={() => handleSelectCity(city.name) } key={index}>
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
    {/* ); */}
{/* }; */}

{/* export default CitySelector; */}
        {/* <div className='cross-con1'> 
            <i onClick={onCloseModal} class="fa-solid fa-xmark"></i>
            </div>
          <CitySelector/> */}
       
        </Modal.Body>
      </Modal>


    </>)}