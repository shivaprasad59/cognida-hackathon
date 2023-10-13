import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const imgUrl=props.item.url;
    const id=props.item.id
  
  return (
    <Card style={{width:"100%",height:"75vh"}} >
      <CardMedia
        sx={{ height:"75vh" }}
        image={imgUrl}
        title={id}
         
      />
    </Card>
  );
}