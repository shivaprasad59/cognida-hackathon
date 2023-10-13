import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import './Display.css';
import axios from 'axios';

export default function MediaCard(props) {
  const items = props.data1;

  const handleCart = async (item) => {
    await axios
      .post('http://localhost:9000/cart', {
        id: item.itemid,
        image_url: item.image_url,
        type: item.type,
        price: item.price,
        quantity: 1,
        totalprice: item.price,
        title:item.title,
        rating:item.rating,
        size:item.size
      })
      .then((res) => {
        alert('Added item to the cart');
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='display'>
      {items.map((item) => {
        return (
          <div className='card-item' key={item.itemid}>
            <Card sx={{ width: 255, marginLeft: '10%' }}>
              <CardMedia sx={{ height: 250 }} image={item.image_url} title='green iguana' />
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  
                  <Rating
                    name='rating'
                    value={item.rating}
                    precision={0.5}
                    icon={<StarIcon fontSize='inherit' />}
                    readOnly
                    style={{ color: 'gold'}}
                  />
                </div>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold', 
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography gutterBottom variant='subtitle2' component='div' style={{ display: 'flex', alignItems: 'center' }}>
                  Size: {item.size}
                </Typography>
                <Typography
                  gutterBottom
                  variant='body1'
                  component='div'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions style={{justifyContent:"flex-end"}}>
                <Button size='small' startIcon={<ShoppingCartIcon />} onClick={() => handleCart(item)}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
