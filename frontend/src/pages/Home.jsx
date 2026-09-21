import React from 'react'
import '../components/AnimeCard.css'
import AnimeCard from '../components/AnimeCard'

function Home() {
    const anime=[
        {id:1, title: "Love is war", year: 2026, description: "description sample", rating: 3},
        {id:2, title: "Love is war2", year: 2023, description: "dawd sample", rating: 4},
        {id:3, title: "Love is war", year: 1982, description: "a 2323", rating: 5}
    ]
  return (
      anime.map((item)=>{
        return(<AnimeCard key={item.id} title={item.title}  year={item.title} description={item.description} rating={item.rating}/>)
      }
  ))
}

export default Home;

{/* <div className="anime-card-list">      
    {anime.map((item)=>{
        return(
            <div key={item.id} className="anime-card">
                <h3>{item.title}</h3>
                <span>{item.year}</span>
                <p>{item.description}</p>
                <div>★ {item.rating} / 5</div>
            </div>
        )
    })}
</div> */}