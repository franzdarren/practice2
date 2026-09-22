import './Favorites.css'
import AnimeCard from '../components/AnimeCard';

function Favorites({ favorites, removeFavorite }) {
    return (
        <div>
            {
                favorites.length === 0 ? (
                    <div className="favorites-empty">
                        <h2>No fav movies yet..</h2>
                    </div>) : (
                    <div className="anime-card-list">
                        {
                            favorites.map((item) =>
                                (<AnimeCard
                                    key={item.malId}
                                    title={item.title}
                                    image={item.imageUrl}
                                    date={item.startDate}
                                    description={"SAMPLE PLACEHOLDER DESCRIPTION TODO"}
                                    rating={item.score}
                                    onFavoriteClick={() => removeFavorite(item.malId)} />)
                            )
                        }
                    </div>
                )}
        </div>
    )
}

export default Favorites;