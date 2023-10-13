import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Cart.css';
import { Button } from '@mui/material';

const Cart = () => {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            let temp = 0;
            for (let i of data) {
                temp += i.totalprice; // Calculate total price based on item totalprice
            }
            setTotalPrice(temp);
        };
        calculateTotal();
    }, [data]);

    const handleAddQuantity = async (item) => {
        const money = item.price * (item.quantity + 1);
        console.log(item)
        const q = item.quantity + 1;
        await axios.put(`http://localhost:9000/cart/${item.id}`, {
            id: item.id,
            image_url: item.image_url,
            type: item.type,
            price: item.price,
            quantity: q,
            totalprice: money
        })
            .then((res) => {
                console.log(res);
                getData(); // Call getData after updating the quantity
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelQuantity = async (item) => {
        if (item.quantity > 1) {
            const money = item.price * (item.quantity - 1);
            const q = item.quantity - 1;
            await axios.put(`http://localhost:9000/cart/${item.id}`, {
                id: item.id,
                image_url: item.image_url,
                type: item.type,
                price: item.price,
                quantity: q,
                totalprice: money
            })
                .then((res) => {
                    console.log(res);
                    getData(); // Call getData after updating the quantity
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            alert("The item will be removed from the cart");
            await axios.delete(`http://localhost:9000/cart/${item.id}`)
                .then((res) => {
                    console.log(res);
                    getData(); // Call getData after successful deletion
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    };
    const handlePurchase = async () => {
        if (data.length === 0) {
            alert("Cart is empty. Add items to cart before purchasing.");
            return;
        }
        const generatedId=generateUniqueId();
        const orders = data.map((item) => {
            return {
                id: generateUniqueId(), // Generate a unique ID for each order (you can use any method/library to generate unique IDs)
                itemid: item.id,
                image_url: item.image_url,
                type: item.type,
                price: item.price,
                quantity: item.quantity,
                totalprice: item.totalprice,
                size:item.size,
                rating:item.rating,
                title:item.title
            };
        });
    
        try {
            await axios.post('http://localhost:9000/orderhistory', {
                id:generatedId,
                data:orders
            });
            
            // Delete items from cart and reset state only if the POST request is successful
            const deleteCart = async (id) => {
                await axios.delete(`http://localhost:9000/cart/${id}`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
    
            for (let i of data) {
                deleteCart(i.id);
            }
    
            setData([]);
            setTotalPrice(0);
            alert("Successfully purchased.");
        } catch (error) {
            alert("Encountered error while purchasing. Please try again later.");
            console.error(error);
        }
    };
    
    // Function to generate a unique ID (example implementation)
    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/cart");
            if(response.data.length===0){
                alert("cart is empty")
            }
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    

    return (
        <div className='cart-container'>
            <div className='cart-items'>
                {data.map((item) => (
                    <div key={item.itemid} className='item-cart'>
                        <img src={item.image_url} className='img-cart' alt={item.type} />
                        <div className='cart-details'>
                            <h4 className='cart-type'>{item.title}</h4>
                            <h5>Size: {item.size}</h5>
                            <h5>Rating: {item.rating}</h5>
                            <div className='cart-quantity'>
                                <h5>Quantity</h5>
                                <button onClick={() => handleDelQuantity(item)} className='remove-button'>Remove</button>
                                {item.quantity}
                                <button onClick={() => handleAddQuantity(item)} className='add-button'>ADD+</button>
                            </div>
                            <span className='quantity-cart'>
                                {item.quantity} x ${item.price}
                            </span>
                        </div>
                        <h5 className='cart-price'>${item.totalprice}</h5>
                    </div>
                ))}
            </div>
            <div className='totalprice-cart' >
                <h4>Total: ${totalPrice}</h4>
            </div>
            <Button onClick={handlePurchase} variant='contained' color='primary'  className='button-cart-buy'>
                Buy Now
            </Button>
        </div>
    );
};

export default Cart;
