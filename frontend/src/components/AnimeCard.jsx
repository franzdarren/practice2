import React, { useState } from 'react'

import './AnimeCard.css'


function AnimeCard({id, title = "sample Title", year = "N/A", description = "sample desc", image, rating = 0 }){
    function onFavoriteClick(){
        alert("fav clicked " +title)
    }
  return (
    <div className="anime-card" id={id}>
      <img className="anime-card__image" src={image} alt={title} />

      <div className="anime-card__body">
        <h3 className="anime-card__title">{title}</h3>
        <span className="anime-card__year">{year}</span>
        <p className="anime-card__description">{description}</p>

        <div className="anime-card__rating">★ {rating} / 5</div>

        <button onClick={onFavoriteClick}> ♥ </button>
      </div>

    </div>
  )
}

export default AnimeCard;