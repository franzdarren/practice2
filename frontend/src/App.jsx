import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'

function App() {

  return(
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </main>
  )
}

export default App
