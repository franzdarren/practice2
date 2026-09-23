import { useState } from 'react'
import './Practice11.css'

export default function Practice11() {

    const animes = [
        { id: 1, title: "Frieren", episodes: 23 },
        { id: 2, title: "Blue lock", episodes: 12 },
        { id: 3, title: "aot", episodes: 30 }
    ]
    return (
        <div className='anime-list'>
            {animes.map((anime) =>
                <AnimeCard key={anime.id} anime={anime} />
            )}
        </div>
    )
}

function AnimeCard({ anime }) {

    const [noOfEpisodesWatched, setNoOfEpisodesWatched] = useState(0);
    const [favorited, setFavorited] = useState(false);

    return (
        <div className='anime-card'>
            <button onClick={ ()=> setFavorited(!favorited)}>{favorited ? "❤︎" : "♡"}</button>
            <h1 className='card-title'>{anime.title}</h1>
            <ProgressBar progress={noOfEpisodesWatched} totalEp={anime.episodes} />

            <button disabled={noOfEpisodesWatched === 0} onClick={() => setNoOfEpisodesWatched(noOfEpisodesWatched - 1)} data-testid="decrement-button">-</button>
            <button disabled={noOfEpisodesWatched === anime.episodes} onClick={() => setNoOfEpisodesWatched(noOfEpisodesWatched + 1)} data-testid="increment-button">+</button>
            <button disabled={noOfEpisodesWatched === anime.episodes} onClick={() => setNoOfEpisodesWatched(anime.episodes)} data-testid="increment-button">ALL </button>
        </div>

    )
}

function ProgressBar({ progress, totalEp }) {
    return (
        <div>
            {(progress === totalEp ? <p>Completed!</p> : <p>{progress} / {totalEp}</p>)}
            <p>
                {(progress / totalEp * 100).toFixed(2)}%
            </p>
            <div className='progress-bar'>
                <div
                    className='progress-bar__fill'
                    style={{ width: `${(progress / totalEp) * 100}%` }}
                ></div>
            </div>
        </div>
    )
}

