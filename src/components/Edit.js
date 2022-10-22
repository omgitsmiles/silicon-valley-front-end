import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Edit = ({ characters }) => {
    const [select, setSelect] = useState("")

    const renderCharacters = characters.map(character => character.name)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete
                className="aboutTest"
                disablePortal
                id="combo-box-demo"
                options={renderCharacters}
                sx={{ width: 300 }}
                onSelect={e => setSelect(e.target.value)}
                renderInput={(params) => <TextField {...params} label="Developer" />}
                />
    </div>
  )
}

export default Edit