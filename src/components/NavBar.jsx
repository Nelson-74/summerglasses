import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../images/Summer.png'
import {Link} from 'react-router-dom'
import Categories from './Categories'

const NavBar = () => {


  return (
      
      <nav className="navbar navbar-expand-lg bg-light " >
        <div className ="container-fluid ">
          <div>
              <Link to='/'><img src={Logo} width='120' alt='logo'/></Link>
          </div>
            <ul className="navbar-nav mx-auto ">               
              <Categories/>                                      
            </ul>           
            <div>
              <Link to="/Cart" className="carrito-color d-flex gap-3"><CartWidget /> </Link>  
            </div>
        </div>
      </nav> 
        
    );
    
}

export default NavBar;
