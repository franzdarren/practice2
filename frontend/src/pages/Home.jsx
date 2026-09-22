import { useState, useEffect } from 'react'
import { getTopAnime, searchAnime } from '../services/api'
import './Home.css'
import AnimeCard from '../components/AnimeCard'

function Home({ addFavorite, favorites }) {
  // useState("") = a value React remembers between renders. It hands back a pair:
  // [the value right now, the function to change it]. "" is the starting value.
  // Never do searchQuery = "x" — only setSearchQuery("x") tells React to redraw.
  const [searchQuery, setSearchQuery] = useState("")
  const [anime, setAnime] = useState([])

  useEffect(() => {
    getTopAnime().then(data=>console.log(data));
    getTopAnime().then(data=>setAnime(data));
  }, [])


  // const anime = [
  //   { id: 1, title: "Sample 1", year: 6767, description: "description sample", rating: 3.67 },
  //   { id: 2, title: "Love is war", year: 2023, description: "dawd sample", rating: 4.99 },
  //   { id: 3, title: "bruuH", year: 1982, description: "a 2323", rating: 5 }
  // ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  }
  return (
    <>
      <div className='home'>
        <form onSubmit={handleSearch} className="searchForm">
          <input
            type="text"
            placeholder='Search for Anime...'
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}>
          </input>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="anime-card-list">
        {anime.map((item) =>
          item.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
          (<AnimeCard
            key={item.malId}
            title={item.title}
            image={item.imageUrl}
            date={item.startDate}
            description={"SAMPLE PLACEHOLDER DESCRIPTION TODO"}
            rating={item.score}
            onFavoriteClick={()=> addFavorite(item)} />)
        )}
      </div>
    </>
  )
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