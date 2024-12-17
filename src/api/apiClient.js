import axios from 'axios';


const API_KEY = ' c7b8bdd78d9151aa976c660c5e9070a5';
const API_URL = `https://api.themoviedb.org/3/movie`;


export const fetchMovies = async () =>{
  try {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
    return response.data.results;
  }catch (error) {
    console.error('Error al obtener las peliculas:',error.message);
    throw error;
    
  }
 }
