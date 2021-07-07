import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 const Navbar = ()=>{
    return(
        <div className="container">
            <nav className="Navbar">
                
               <h2>Shopping</h2>
                     <ul className="Nav-links">
                        <Link className="Nav-item" to="/">Home</Link>
                        <Link className="Nav-item" to="/Shopping">My cart<i class="fa fa-shopping-cart" ></i></Link>
                    </ul>
                    </nav>
                </div>
                
          

    )
}

export default Navbar;