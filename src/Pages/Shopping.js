import React,{useState,useEffect} from 'react';
import './Shopping.css';
import axios from 'axios';
const Shopping = () => {

  const [items,setList]=useState([]);

  const LoadItems=async()=>{
    const data=await axios.get('http://localhost:3001/cartItems');
    setList(data.data)
        }
        useEffect(() => {
          LoadItems();
        }, [])

      const  deleteItem=async(id)=>{
        const delte=await axios.delete(`http://localhost:3001/cartItems/${id}`)
        LoadItems();
      }
    return (
      
      <div style={{
        display: "flex",
        flexWrap:"wrap"
        
      }}>
          {items.map((Item,i)=>(
            <div className="cont">
              <img src={Item.image}/>
             <div className="item">
            <p className="name"><h2>{Item.name}</h2></p>
            
            <p className="detail">{Item.detail}</p>
            <p className="price"><b>Price:{Item.price}</b></p>
            <button className="btn" onClick={()=>deleteItem(Item.id)}>Remove<i class="fa fa-shopping-cart" ></i></button>
            </div>
            </div>
          ))}
        </div>
    )
}

export default Shopping;
