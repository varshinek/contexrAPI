import * as React from 'react';
import { useCart } from './CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
      <h2 className='text-center'>Your Cart</h2>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={2}>
      <Box flex="2">        {
        cart.length === 0 ? (
          <p className='paragraph'>Your cart is empty</p>
          ):(
            <Box display="flex" flexWrap="wrap" gap={2}>
              {cart.map((item) => (
                <Card key={item.id} sx={{ width: 300, border: 3 }}>
                  <CardMedia
                    sx={{ width: 300, height: 350}}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Category: {item.category}
                    </Typography>
                    <Typography variant="body2" color="#5e35b1">
                     Price: ₹{item.price}
                    </Typography>
                    <Typography variant="body2" color="#f44336">
                      Quantity: 
                      <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                      {item.quantity}
                      <Button  onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="#ffc107">
                      Subtotal:  ₹{item.price * item.quantity}
                    </Typography>
                    <Typography variant="body2" color="#ffc107">
                      Shipping: {item.shipping}
                    </Typography>
                    <hr/>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained"  onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
        )}
      </Box>

      {cart.length > 0 && (
        <Box flex="1" sx={{ minWidth: 250 }}>
          <Card sx={{ padding: 2, border: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom color='#2196f3'>
                Cart Summary
              </Typography>
              <Typography variant="body1">
                Total Quantity: {totalQuantity}
              </Typography>
              <Typography variant="body1">
                Total Amount: ₹{totalAmount.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
    </div>
  );
}

export default Cart;
