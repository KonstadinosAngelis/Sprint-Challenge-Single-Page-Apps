import React, { useEffect, useState } from "react";
import axios from "axios"

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  const [character, setCharater] = useState([])

  const searchForCharacter = characterData => {
    if(character == []){
      setCharater(test)
    } else {
    console.log(character);
    setCharater(characterData)}
  }

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      const test = setCharater(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>Meet the characters</h2>
      <SearchForm data = {character} searchForCharacter = {searchForCharacter}/>
      <div>
        {character.map((character) => {
          return <CharacterCard key = {character.id} data = {character}/>
        })}
      </div>
    </section>
  );
}
