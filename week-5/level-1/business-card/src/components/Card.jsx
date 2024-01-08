// import React from 'react'

 const Card = ({name,description,interests,linkden,twitter}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>{interests}</p>
        <div className="links">
        <a href={linkden} target="_blank" rel="noopener noreferrer">Linkden</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>

    </div>
  )
}
export default Card;