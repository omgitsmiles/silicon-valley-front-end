import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


const Edit = ({ characters }) => {
    const [select, setSelect] = useState("")
    const [info, setInfo] = useState("")
   
    const renderCharacters = characters.map(character => character.name)

    const handleClick = () => {
        const searched = characters.find(character => character.name === select)
        if (searched !== undefined) {
            setInfo(info => !info)
            return searched.apps.map((a, index) => (
                <>
                <ul key={index}>{a.name}</ul>
                <li>{a.motto}</li>
                </>
            )) 
        } else {
            setInfo(false)
        }
    }

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
                <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Title"
                variant="filled"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                />
        </div>
            <br></br>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Description"
                variant="filled"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                />
            <br></br>
            <br></br>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Movie Poster"
                variant="filled"
                // value={image}
                // onChange={(e) => setImage(e.target.value)}
                />
                <div>
                    <br></br>
                    <Button variant="contained" type="submit" onClick={handleClick}>Create</Button>
                </div>
    </div>
  )
}

export default Edit