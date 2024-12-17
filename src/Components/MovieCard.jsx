import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, addToPlaylist }) {
  const { id, title, poster_path, vote_average } = movie;

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <p>⭐ {vote_average.toFixed(1)}</p>
        </div>
      </Link>
      <button onClick={() => addToPlaylist(movie)}>Agregar a lista</button>
    </div>
  );
}

export default MovieCard;
