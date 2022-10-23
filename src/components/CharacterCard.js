import React, { useState } from 'react';
import EditApp from './EditApp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const CharacterCard = ({ character:{ apps, character_img, name, quote }, setCharacters }) => {
    const [showApp, setShowApp] = useState(false)
    // const [updateApps, setUpdateApps] = useState(apps)
    const [isEditing, setIsEditing] = useState(false)

    function handleDelete(a) {
        const deleted = apps.filter(app => app.id !== a)
        // setUpdateApps(deleted)
      fetch(`http://localhost:9292/apps/${a}`,{
      method: "DELETE",
      headers: {
        "Content-type" : "application/json"
        }
        })
    }

    const renderApps = apps.map((a) => (<>
        <li key={a.id}>{a.name}</li>
        <Button>Edit</Button>
        <Button onClick={() => handleDelete(a.id)}>Delete</Button>
    </>))

    

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={character_img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quote}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> setShowApp(showApp => !showApp)}>Learn More</Button>
        {showApp ? (<div>Apps:
            {renderApps} 
        </div>) : null}
      </CardActions>
    </Card>
    </div>
  )
}

export default CharacterCard