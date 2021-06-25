import React,{ useState } from 'react'
import Slab from '../Components/Slab'
import { Link } from 'react-router-dom';

export default function Blog() {

    // doubledrop
    const [double, setDouble] = useState(false)
    const [drop] = useState(
        [
       {main: <p className="parent" onClick={() =>{setDouble(!double)}}> 
       <Link to="/">Home</Link>
       </p>,
        second:         <>   
        <div className="list">
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
         }, 
       {main: <p className="parent" onClick={() =>{setDouble(!double)}}> 
       <Link to="/pages"> Pages </Link>
       </p>,
        second: <Link to="/shop">cake2</Link>

    },
       {main:<p className="parent" onClick={() =>{setDouble(!double)}}> 
       <Link to="/portfolio"> Portfolio </Link>
       </p>,
        second: <Link to="/shop">Cakes3</Link>   
    },
    ]);

    const [open,setOpen] = useState(false);


    return (
        <div>
           <Slab header="Blog" para="Home"/>
           <div style={{height: "500px"}}>

                {/* <Menu >
                   <DoubleDrop/>
                </Menu> */}
                {/* doubledrop */}
                <button style={{transform: "translate(290px,200px)"}} onClick={()=> setOpen(!open)}/>  
                {open && drop.map((item)=> item.main )} 
                {double && drop.map((item)=> item.second )}
            </div>
        </div>
    )
}












// function Menu(props){
//     const [open,setOpen] = useState(false);
//     return(
//         <li className="logo" style={{textDecoration:"none"}}>   
                        
//        <button className="nav-btn" onClick={()=> setOpen(!open)}>  
//                  {!open &&  <span style={{left: "290px"}} className="menu-uni"></span>}
//                  {open &&  <span style={{left: "290px"}} className="menu-uni-open"></span>}
//         </button>  
//        {open && props.children}
//        </li>
//     );
//     }
    
//     function DoubleDrop(){
//         const [open,setOpen] = useState(false);
//         const[item,setItem] =useState(0);
//         return(
//             <div style={{left: "350px",top:"530px"}} className="dropdown">
//             <p className="parent" onClick={() =>{setOpen(!open);setItem(1);}}> 
//                <Link to="/">Home</Link>
//                 <span className="arrow">
//                 <button className="nav-btn" >  
//                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
//                  <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                 </svg>
//                 </button>
//                 </span>
//                 <DoubleDropItem value={1}item={item} open={open}>
                 
//                 </DoubleDropItem>
           
//                 </p>
           
//             <p className="parent" onClick={() => {setOpen(!open);setItem(2);}}>
//                 <Link to="/pages"> Pages </Link>
//             <span className="arrow">
//                 <button className="nav-btn" >  
//                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
//                  <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                 </svg>
//                 </button>
//                 </span>
//                 <DoubleDropItem value={2} item={item} open={open}>
                  
//                 </DoubleDropItem>
               
//             </p>
//             <p className="parent"  onClick={()=> {setOpen(!open);setItem(3);}}>
//             <Link to="/portfolio"> Portfolio </Link>
//             <span className="arrow">
//                 <button className="nav-btn">  
//                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
//                  <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                 </svg>
//                 </button>
//                 </span>
//                 <DoubleDropItem value={3} item={item} open={open}>
               
//                 </DoubleDropItem>
            
//             </p>
//             <p className="parent" onClick={()=> {setOpen(!open);setItem(4);}}>
//             <Link to="/blog"> Blog </Link>
//             <span className="arrow">
//                 <button className="nav-btn" >  
//                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
//                  <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                 </svg>
//                 </button>
//                 </span>
//                 <DoubleDropItem value={4} item={item} open={open}>
                  
//                 </DoubleDropItem>
//               </p>  
//             <p className="parent"  onClick={()=>{setOpen(!open);setItem(5);}}> 
//             <Link to="/shop"> Shop </Link>
//             <span className="arrow">
//                 <button className="nav-btn">  
//                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
//                  <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                 </svg>
//                 </button>
//                 </span>
//                 <DoubleDropItem value={5} item={item} open={open}/>
//             </p>
//             <p className="parent"> <Link to="/contact">Contacts</Link>
//             </p>
//            </div>
    
//         )
    
//     }
    
//     function DoubleDropItem(props){
//        if(props.open && props.item ===1 && props.item === props.value) return(
//             <>   
//             <div className="list">
//               <Link to="/shop">Cakes</Link>
//                     <Link to="/shop">Lollipop</Link> 
//                     <Link to="/shop">Wedding</Link> 
//                     <Link to="/shop">Coffee</Link> 
//                     <Link to="/shop">Ice-Cream</Link> 
//                     <Link to="/shop">Home One-page</Link> 
//                     <Link to="/shop">Shop</Link> 
//                     <Link to="/shop">Landing</Link> 
//             </div>
//             </>
//         );
//         else if(props.open && props.item ===2 && props.item === props.value) return(
//             <>
//             <div className="list">
//                 <Link to="/">About Us</Link>
//                     <Link to="/">Our Staff</Link> 
//                     <Link to="/">Pricing Tables</Link>   
//                     <Link to="/">Content Elements</Link> 
//                     <Link to="/">Recipies Grid</Link> 
//                     </div>
//             </>
//         );
//         else if(props.open && props.item ===3 && props.item === props.value) return(
//             <>
//                 <div className="list">
//                     <Link to="/">Masonry</Link>
//                     <Link to="/">Masonry wide</Link> 
//                     <Link to="/">Wide</Link> 
//                     <Link to="/">With Filter</Link> 
//                     <Link to="/">Two Columns</Link> 
//                     <Link to="/">With Sidebar</Link> 
//                     <Link to="/">Square</Link> 
//                     </div>
//             </>
//         );
//         else if(props.open && props.item ===4 && props.item === props.value) return(
//             <>
//                     <div className="list">
//                      <Link to="/">Checkerboard</Link>
//                     <Link to="/">Standard</Link> 
//                     <Link to="/">Masonry</Link> 
//                     </div>
//             </>
//         );
//         else if(props.open && props.item ===5 && props.item === props.value) return(
//             <>
//             <div className="list">
//                       <Link to="/shop">Shop</Link>
//                     <Link to="/cart">Cart</Link> 
//                     <Link to="/checkout">Checkout</Link> 
//                     <Link to="/account">My account</Link> 
//                     </div>
//             </>
//         );
//         else
//         return null;
//     }