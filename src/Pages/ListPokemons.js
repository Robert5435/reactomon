import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getPokemonsAPI from '../components/GetPokemons';
import GetPokemonsAPI from '../components/GetPokemons';
  


function ListPokemons(pokemons){
  const dispalyPokemons = (pokemons) => {
    const pokemoniimasii = pokemons.pokemons
    console.log(pokemoniimasii)
    pokemoniimasii.map((pokemon,index)=>{
      console.log(pokemon)
    })
    return(<div>

      <h3 className="pokemon_name">{}</h3>
    </div>)
  }

  return(
    <>
    {dispalyPokemons(pokemons)}
    </>
  )
}
export default ListPokemons;