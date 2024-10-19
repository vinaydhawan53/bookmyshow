import React from 'react'
import './card.css'
// import photo1 from '../../images/All_imges/photo1.jpg'
// import photo2 from '../../images/All_imges/photo2.jpg'

// import { Moviesclick } from '../../showmoviedetails/showMovie'
// import { moviesData } from '../../data/movie'
import { Link } from 'react-router-dom'
const Card = ({ img, name, title,link }) => {
    console.log(img);
    const handleCardClick =() =>{  }

    return (
        <div className='img-con1' onClick={handleCardClick}>
            <Link to={link}>
            <img src={img} alt="" srcset="" />


            </Link>
            
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Card;
