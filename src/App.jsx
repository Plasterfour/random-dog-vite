import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    fetchRandomDog();
  }, []);
  const fetchRandomDog = () => {
    /* ⬅️ función para obtener un perrito aleatorio */
    setIsLoading(true);
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
        console.log(dog);
      });
  };
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={fetchRandomDog}>
        <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      </button>
    </div>
  );
}
