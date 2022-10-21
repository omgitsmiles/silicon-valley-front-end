import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CharacterCard = ({ character }) => {

    console.log(character)


  return (
    <div>
    <Card className="card" sx={{ maxWidth: 200 }}>
        <CardMedia
        component="img"
        height="50"
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </div>
  )
}

export default CharacterCard