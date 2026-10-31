import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import PersonajeCard from "./components/PersonajeCard";

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const datos = await response.json();
      
      setPersonajes(datos.results.slice(0, 16));
    };

    obtenerPersonajes();
  }, []);

  return (
    <div className="app-container">
      <h1>Lista de Personajes en Rick and Morty</h1>
      
      <div className="grid-container">
        {personajes.map((pers) => {
          return (
            <PersonajeCard key={pers.id} pers={pers} />
          );
        })}
      </div>
    </div>
  );
}

export default App;