import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Item from './Item';

function Example(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:9000/trending")
        .then((res) => {
          console.log(res);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  const aspectRatio = 16 / 9; // Set the aspect ratio based on your image dimensions

  return (
    <Carousel
      sx={{
        marginTop: "3vh",
        marginLeft: "5vh",
        marginRight: "5vh",
        height: "100vh", // Set the height based on aspect ratio
      }}
      duration={500}
      swipe
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
