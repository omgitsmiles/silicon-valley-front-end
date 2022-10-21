import React from 'react';
import CharacterCard from './CharacterCard';


const HomePage = ({ characters }) => {

    const renderCharacters = characters.map(character => {
        <CharacterCard key={character.id} character={character}/>
    })

  return (
    <main>
        {renderCharacters}
    </main>
  )
}

export default HomePage