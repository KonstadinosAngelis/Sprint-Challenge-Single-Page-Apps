import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [typed, setTyped] = useState("")
  const [characterData, setCharacterData] = useState([])

  const saveFilteredData = () => {
    const searchForCharacter = props.searchForCharacter;
    searchForCharacter(characterData);
  }

 useEffect(() => {
   const filteredData = props.data.filter((character) => 
    character.name.toLowerCase().includes(typed.toLowerCase())
   ); 
   setCharacterData(filteredData);
   saveFilteredData()

 }, [typed])

 const handleChanges = change => {
   console.log(typed);
  setTyped(change.target.value);
 };

  return (
    <div className="search-form">
      
      <form>
      <input 
      name = "name"
      id = "name"
      type = "text"
      placeholder = "Enter Character Name"
      autoComplete = "off"
      onChange = {handleChanges}
      value = {typed}
      />
      </form>
    </div>
  );
}
