import axios from 'axios';

// Corregir API_KEY (sin espacios adicionales)
const API_KEY = 'c7b8bdd78d9151aa976c660c5e9070a5';
const API_URL = 'https://api.themoviedb.org/3'; // URL base correcta

export const fetchMovies = async () => {
  try {
    // Hacemos una petición GET a /movie/popular con los parámetros necesarios
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,  
        language: 'es-ES',
        page: 1,
      },
    });

    return response.data.results; // Devuelve las películas obtenidas
  } catch (error) {
    console.error('Error al obtener las películas:', error.message);
    return []; 
  }
};
