import React from 'react';
import CharacterCard from './CharacterCard';



const HomePage = ({ characters, setCharacters }) => {

    const renderCharacters = characters.map(character => (
        <CharacterCard key={character.id} character={character} setCharacters={setCharacters}/>
    ))

  return (
    <main>
        {renderCharacters}
    </main>
  )
}

export default HomePage