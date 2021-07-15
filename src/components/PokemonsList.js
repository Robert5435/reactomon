import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListPokemons from '../Pages/ListPokemons';
  
function PokemonsList () {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  },[]);

  const getAllPokemons = async () =>{

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
    if (response.status === 200) {
      
      setPokemons(response.data.results)
    }
    
  }


  return (
      <>
      <ListPokemons pokemons = {pokemons}/>
      </>
  );
};
  
export default PokemonsList;