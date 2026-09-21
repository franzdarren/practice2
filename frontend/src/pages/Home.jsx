import { useState } from 'react'
import '../components/AnimeCard.css'
import AnimeCard from '../components/AnimeCard'


function Home() {
  // useState("") = a value React remembers between renders. It hands back a pair:
  // [the value right now, the function to change it]. "" is the starting value.
  // Never do searchQuery = "x" — only setSearchQuery("x") tells React to redraw.
  const [searchQuery, setSearchQuery] = useState("")

  const anime = [
    { id: 1, title: "Love is war", year: 2026, description: "description sample", rating: 3 },
    { id: 2, title: "Love is war2", year: 2023, description: "dawd sample", rating: 4 },
    { id: 3, title: "Love is war", year: 1982, description: "a 2323", rating: 5 }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  }
  return (
    <>
      <div className="anime-card-list">
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
            item.title.toLowerCase().startsWith(searchQuery) &&
            (<AnimeCard
              key={item.id}
              title={item.title}
              year={item.year}
              description={item.description}
              rating={item.rating} />)
          )}
        </div>
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