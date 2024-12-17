import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Playlist from './pages/Playlist';

function App() {
  const [playlist, setPlaylist] = useState([]);

  // Función para agregar películas a la lista de reproducción
  const addToPlaylist = (movie) => {
    if (!playlist.find((m) => m.id === movie.id)) {
      setPlaylist([...playlist, movie]);
    }
  };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home addToPlaylist={addToPlaylist} />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails addToPlaylist={addToPlaylist} />}
          />
          <Route
            path="/playlist"
            element={<Playlist playlist={playlist} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
