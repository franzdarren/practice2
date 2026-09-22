import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

function App() {
  const [favorites, setFavorites] = useState([])

  function addFavorite(anime) {
    setFavorites((prev) => [...prev, anime])
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((item) => item.malId !== id))
  }

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addFavorite={addFavorite} favorites={favorites} />}></Route>
          <Route path="/favorites" element={<Favorites favorites={favorites} removeFavorite={removeFavorite} />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
