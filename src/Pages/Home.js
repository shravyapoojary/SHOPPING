import React from 'react';
import ShopItems from './product.js';
import Card from '../Component/Card.js';

import './../style.css';
const Home = () => {
 
  let items=ShopItems();
    return (
        <div style={{
          display: "flex",
          flexWrap:"wrap"
          
        }}>
         
         
          
        
      {items.map((ShopItem,i)=>(
        
         <Card 
         name={ShopItem.name}
         image={ShopItem.image}
         
         price={ShopItem.price}
         detail={ShopItem.detail}
         key={i}
         
  />
  
 ))}
   
    
    
    

  </div>    
  );  
}

export default Home
