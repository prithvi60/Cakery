import React from 'react'
import { Link } from 'react-router-dom';


export default function Menu(props) {
    const {double , name }=props;
    
    if( name === "Home" && double[0] ) return(
      <>                
                      <div className="list" >
                      <Link to="/shop">Cakes</Link>
                             <Link to="/shop">Lollipop</Link> 
                             <Link to="/shop">Wedding</Link> 
                             <Link to="/shop">Coffee</Link> 
                             <Link to="/shop">Ice-Cream</Link> 
                             <Link to="/shop">Home One-page</Link> 
                             <Link to="/shop">Shop</Link> 
                             <Link to="/shop">Landing</Link> 
                     </div> 
                    </>  
         );
    else if(name === "Pages" && double[1] ) return(
                         <>
                         <div className="list">
                             <Link to="/">About Us</Link>
                                 <Link to="/">Our Staff</Link> 
                                 <Link to="/">Pricing Tables</Link>   
                                 <Link to="/">Content Elements</Link> 
                                 <Link to="/">Recipies Grid</Link> 
                                 </div>
                         </>
                     );
    else if(name === "Shop" && double[2]) return(
                        <>
                        <div className="list">
                                <Link to="/shop">Shop</Link>
                                <Link to="/cart">Cart</Link> 
                                <Link to="/checkout">Checkout</Link> 
                                <Link to="/account">My account</Link> 
                                </div>
                        </>
                    );
    
    else return null;
}

// function MenuItem(prop){

// }