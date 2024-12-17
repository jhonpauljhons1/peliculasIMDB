import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/apiClient';
import MovieCard from '../Components/MovieCard';

export default function Home () {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    const getMovies = async()=>{
        try{
            const data = await fetchMovies();
            setMovies(data);
        }catch(error){
            console.log("error cargando peliculas:",error);
        }
    };
    getMovies();
  },[]);
  return(
    <div>
        <h1>Peliculas populares</h1>
        <div className='moviesContainer'>{movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
    </div>
  );
    
}


