import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


const Edit = ({ characters }) => {
    const [select, setSelect] = useState("")
    const [appName, setAppName] = useState("")
    const [motto, setMotto] = useState("")
   
    const renderCharacters = characters.map(character => character.name)

    const handleClick = (e) => {
        e.preventDefault()
        const newApp = {name: appName, motto: motto}
        const searched = characters.find(character => character.name === select)
        if (searched !== undefined) {
            fetch(`http://localhost:9292/characters/${characters.id}/apps`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newApp)
            })
            setAppName("")
            setMotto("")
        } else {
            console.log("not here")
        }
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleClick}>
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
            <div>
                <TextField
                required
                id="filled-basic"
                label="App Name"
                variant="filled"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                />
        </div>
            <br></br>
                <TextField
                required
                id="filled-basic"
                label="Description"
                variant="filled"
                value={motto}
                onChange={(e) => setMotto(e.target.value)}
                />
                <div>
                    <br></br>
                    <Button variant="contained" type="submit">Add</Button>
                </div>
        </form>
    </div>
  )
}

export default Edit