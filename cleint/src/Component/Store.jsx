import React, { useState, useEffect } from 'react';
import Header from '../HomeStore/Header1';
import HeroStore from '../HomeStore/HeroStore';
import Category from '../HomeStore/Category';
import WoCatogery from '../HomeStore/WoCatogery';
import BestSalary from '../HomeStore/BestSalary';
import Adssec from '../HomeStore/Adssec';
import Shosepro from '../HomeStore/Shosepro';
import BestSa from '../HomeStore/BestSa';
import Shose from '../HomeStore/Shose';
import BarAds from '../HomeStore/BarAds';
import Hproduct from '../HomeStore/Hproduct';
import WoHpro from '../HomeStore/WoHpro';
import OpinCs from '../HomeStore/OpinCs';
import Wocs from '../HomeStore/Wocs';

function Store() {
  const [cartCount, setCartCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    // Adjust the API endpoint based on your server setup
    fetch('http://localhost:3010/Product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  const handleAddToCart = () => {
    // Update the cart count when a product is added to the cart
    setCartCount(cartCount + 1);
  };

  const handleAddToWishlist = () => {
    // Update the wishlist count when a product is added to the wishlist
    setHeartCount(heartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} heartCount={heartCount} />
      <HeroStore />
      <WoCatogery />
      <Category />
      <br></br><br></br><br></br><br></br>
      <BestSa/>
      {/* Render BestSalary only if products are available */}
      {products.length > 0 && <BestSalary onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />}

      <Adssec/>
      <Shose/>

      {products.length > 0 && <Shosepro onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />}

      <BarAds/>

      <WoHpro/>

      {products.length > 0 && <Hproduct onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist}/>} 
      <Wocs/>

      <OpinCs/>
    </div>
  );
}

export default Store;
