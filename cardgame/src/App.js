import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
  const [pokeName, setPokeName] = useState([]);
  const [pokeImg, setPokeImg] = useState("");

  // Used to get Data on Load - useEffect
  useEffect(() => {
    // async function called to fetch then setState
    const getData = async () => {
      // Makes request to database
      let res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon");

      // Parses Response if needed
      

      // sets the state with the fetched data
     
    };

    getData();
  }, []);

  return (
    <>
     <h2>{pokeName}</h2>
     <img src={pokeImg} />
  );
};

export default App;