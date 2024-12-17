import React from "react";


export default function Footer(){
    const year = new Date().getFullYear();
     return(
      <footer className="footer">
        <h6>&copy;{year} Todos los derechos reservados</h6>
        <p>IMDB movies</p>
    </footer>
     );
};    
    