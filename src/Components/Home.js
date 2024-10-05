import React from 'react';
import ProductData from '../data/Products';
import { useCart } from './CartContext';
import Button from '@mui/material/Button';
import StarRating from './StarRating';
import { Typography } from '@mui/material';

function Home()  {

  const { addToCart } = useCart()

  return (
    <div>
      <section className="py-5">
      <h2 className='trendy text-center'>TRENDY SPOT !..</h2>
        <div className="container px-4 px-lg-5 mt-5">
          
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {ProductData.products.map((product) => {
              return (
                <div className="col-lg-4 mb-4" key={product.id}>
                  <div className="card h-100">
                  {product.isOnSale && (
                      <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                        Sale
                      </div>
                    )}
                    <img className="card-img-top" src={product.image} alt={product.title} />
                    <div className="card-body p-2">
                      <div className="text-center">
                        <Typography variant="body1" color="#212121">
                        {product.title}
                        </Typography>
                        <Typography variant="body1"  color="#212121" style={{fontSize:"15px"}}>
                        {product.description}
                        </Typography>
                        <Typography variant="body2"  style={{fontSize:"20px"}} color="#f44336">
                        ₹{product.price}
                        </Typography>
                        <StarRating rating={product.rating}/>
                        <Typography variant="body2"  style={{fontSize:"20px"}} color="#212121">
                          {product.rating}
                        </Typography>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <Button variant="contained" onClick={() => addToCart(product)}>
                        Add To Cart</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
