import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getPokemonsAPI from '../components/PokemonsList';
import GetPokemonsAPI from '../components/PokemonsList';
import Paper from '@material-ui/core/Paper';



function ListPokemons(props){


  const dispalyPokemons = (props) => {
    const pokemons = props.pokemons
    console.log(pokemons)
    pokemons.map((pokemon,index) => {
      console.log(pokemon)
      return(
        <div>asa</div>
      )
    })
  }
  
  return(
    <>
    <Paper elevation={3} >
    {props.pokemons.map((pokemon, index) => 
  {
    return (<li key={index}>{pokemon.name} , {pokemon.url}</li>);
  }
)}
</Paper>
    </>
  )
}
export default ListPokemons;