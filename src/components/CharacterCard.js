import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';

const CharacterCard = ({ character }) => {
    const [showApp, setShowApp] = useState(false)

    const renderApps = character.apps.map(a => (<li key={a.name}>{a.name}</li>))

    

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={character.character_img}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.quote}
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