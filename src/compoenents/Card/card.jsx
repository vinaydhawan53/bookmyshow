import React from 'react'
import './card.css'
// import { Moviesclick } from '../../showmoviedetails/showMovie'
import { Link } from 'react-router-dom'
const Card = ({ img, name, title,link }) => {
    const handleCardClick =() =>{  }

    return (
        <div className='img-con1' onClick={handleCardClick}>
            <Link to={link}>
            <img src={img} alt="" srcset="" />
            </Link>
            {/* <a href={link}>
            <img src={img} alt="" srcset="" />
            </a> */}
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Card
