import { Link } from 'react-router-dom';

 export default function NavBar() {
  return (
    <nav>
      <h1>IMDB Search</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/playlist">Lista de reproducción</Link></li>
      </ul>
    </nav>
  );
}

