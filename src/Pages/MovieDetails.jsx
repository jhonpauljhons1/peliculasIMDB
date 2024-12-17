import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';

function MovieDetails({ addToPlaylist }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await apiClient.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Error al cargar los detalles de la película.');
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p><strong>Resumen:</strong> {movie.overview}</p>
      <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
      <p><strong>Calificación:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
      <button onClick={() => addToPlaylist(movie)}>Agregar a lista</button>
    </div>
  );
}

export default MovieDetails;