import React from 'react'
import Slab from '../Components/Slab'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'


export default function Cart() {
    return (
        <div>
            <NavBar/>
           <Slab header="Cart" para="Home"/>
           <div className="cartpg-container">
           <p>Your cart is currently empty.</p>	
           <p>
            <Link  to="/shop">
			Return to shop</Link>
	        </p>
           </div>
            
        </div>
    )
}
