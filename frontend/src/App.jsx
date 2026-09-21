import { useState } from 'react'
import './App.css'
import AnimeCard from './components/AnimeCard'

function App() {

  return(
    <div className="anime-card-list">
      <AnimeCard title="anime" description="A" year={2026} rating={4.3}/>
      <AnimeCard title="sample" description="B" year={2026} rating={2.3}/>

    </div>
  )
}

export default App
