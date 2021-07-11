import React from 'react'
import Slab from '../Components/Slab'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { connect } from 'react-redux';


function Cart() {
    return (
        <div>
            <NavBar/>
           <Slab header="Cart" para="Home"/>
           <div className="cartpg-container">
            {/* map function  of cart from redux*/}
           <p>Your cart is currently empty.</p>	
           <p>
            <Link  to="/shop">
			Return to shop</Link>
	        </p>
           </div>
            
        </div>
    )
}

// Redux function map/subscribe to prop 
const mapStateToProps =(state, ownProps)=>{
//     let id = ownProps.match.params.item_id;
//   return{
//     images: state.image.find(images => images.id === id ),
//     counter:state.counter,
//     name:state.name,
//     qty:state.cart.qty
//   }
}  
export default connect(mapStateToProps)(Cart)