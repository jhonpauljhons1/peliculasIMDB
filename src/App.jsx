import React from 'react';
import './App.css'; // Importamos el archivo CSS de App
import Home from './pages/Home';
import MovieDetails from './Pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='/movie/:id' element={<MovieDetails />}/>
     </Routes>
    <div className="app-container">
      {/* Barra de navegación */}
      <header className="header">
        <h1>IMDB Search</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/playlist">Lista de Reproducción</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <Home />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 IMDB Search - Desarrollado por José Antonio</p>
      </footer>
    </div>
    </>
  );
}

export default App;
