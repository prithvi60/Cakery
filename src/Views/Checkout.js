import React from 'react'
import NavBar from '../Components/NavBar'
import Slab from '../Components/Slab'
// import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
        <div>
            <NavBar/>
            <Slab header="Checkout" para="Home"/>
           <div className="cartpg-container">
           <p>Your cart is currently empty.</p>	
           <p>Your Order.</p>	

           {/* <p>
            <Link  to="/shop">
			Return to shop</Link>
	        </p> */}
           </div>
            
        </div>
    )
}
