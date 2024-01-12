// import React from 'react'
import './Card.css';
 const Card = ({name,description,interests,linkedin,twitter}) => {
  return (
    <div className='box'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>{interests}</p>
        <div className="links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">Linkden</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>

    </div>
  )
}
export default Card;