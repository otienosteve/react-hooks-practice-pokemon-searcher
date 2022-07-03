import React,{useEffect,useState} from "react";
import PokemonPage from "./PokemonPage";
const API_URL="http://localhost:3001/pokemon"
function App() {
  const [pokemon, setPokemon]=useState([])
  const getPokemon=()=>{
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>{setPokemon(data);})
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
   getPokemon()
  },[])
  function searchPokemon(term){
    // getPokemon()
    const newPokemon=pokemon.filter(pk=>pk.name.includes(term))
    setPokemon(newPokemon)
  }
  const addPokemon=(payload)=>{
    fetch(API_URL,
      {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err)) 
    
  }
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} searchPokemon={searchPokemon} addPokemon={addPokemon} />
    </div>
  );
}

export default App;
