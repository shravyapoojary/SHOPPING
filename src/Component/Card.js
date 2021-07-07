import React from 'react'
import  './Card.css';
import axios from 'axios';
const Card = ({name,image,price,detail}) => {
    let item={name,image,price,detail};
    const AddToCart=async()=>{
await axios.post('http://localhost:3001/cartItems',item)
    }

    return (
        
        <div className="cont" >
             <img src={image}/>
             <div className="item">
            <p className="name"><h2>{name}</h2></p>           
            <p className="detail">{detail}</p> 
            <p className="price"><b>Price:{price}</b></p>
        <button className="btn" onClick={AddToCart}><i class="fa fa-shopping-cart" ></i></button>
            </div>
        </div>
    )
}

export default Card;
