import React,{useState} from "react";

function Search({searchPokemon}) {
  const [term,setTerm]=useState("")
  console.log(term.length)
  console.log(term)
  function handleChange(e){
setTerm(prev=>e.target.value)
console.log(term.length)
console.log(term)
searchPokemon(term)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={term} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
