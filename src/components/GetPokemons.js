import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListPokemons from '../Pages/ListPokemons';
  
function GetPokemons () {

  const [pokemons, getPokemonList] = useState('');

  useEffect(() => {
    getAllPokemons();
  },[]);

  const getAllPokemons = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then((Response) => {
      const allPokemons = Response.data.results;
      getPokemonList(allPokemons);
    }).catch(Error => console.error(Error))
  }



  

  return (
      <>
      <ListPokemons pokemons = {pokemons}/>
      </>
  );
};
  
export default GetPokemons;