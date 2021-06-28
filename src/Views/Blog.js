import React,{ useState } from 'react'
import Slab from '../Components/Slab'
import NavBar from '../Components/NavBar';
import Menu from '../Components/Menu';

import { Link } from 'react-router-dom';

export default function Blog() {

    // doubledrop
    const [doubleA, setDoubleA] = useState(false);
    const [doubleB, setDoubleB] = useState(false);
    const [doubleC, setDoubleC] = useState(false);


    const [drop] = useState(
        [
       {main:
        <p className="parent" onClick={()=>setDoubleA(!doubleA)}> 

       <Link to="/">Home</Link>
       </p>,
        text: "Home",
        id: 0
       ,

         }, 
       {main: 
        <p className="parent" onClick={()=>setDoubleB(!doubleB)}> 

       <Link to="/pages"> Pages </Link>
       </p>
       ,
       text: "Pages",
       id:1
    },
       {main:
        <p className="parent" onClick={()=>setDoubleC(!doubleC)}> 

       <Link to="/shop"> Shop </Link>
       </p>
       ,
       text: "Shop",
       id: 2
    },
    {main:
        <p className="parent" > 

        <Link to="/contact"> Contact </Link>
        </p>
     }
    ]);

    const [open,setOpen] = useState(false);


    return (
        <div>
            <NavBar/>
           <Slab header="Blog" para="Home"/>
           <div style={{height: "500px"}}>

        
                <button style={{transform: "translate(290px,20px)"}} onClick={()=> setOpen(!open)}/>  
       
  <div style={{left: "350px",top:"530px"}} className="dropdown">
               
                {open && drop.map((item,index)=> <>
                {item.main}
                <Menu key={index}
                 id={item.id}
                 name={item.text}
                 double={[doubleA,doubleB,doubleC]}
                />
                </>
            )} 
            </div>
            
            
                {/* {double && drop.map((item)=> item.second )} */}
            </div>
        </div>
    )
}


// function Menu(props){
// const {double , name , key}=props;
// const [inside, setInside] = useState(true);

// if( name === "Home" && double ) return(
//   <>   
//                  <div className="list">
//                    <Link to="/shop">Cakes</Link>
//                          <Link to="/shop">Lollipop</Link> 
//                          <Link to="/shop">Wedding</Link> 
//                          <Link to="/shop">Coffee</Link> 
//                          <Link to="/shop">Ice-Cream</Link> 
//                          <Link to="/shop">Home One-page</Link> 
//                          <Link to="/shop">Shop</Link> 
//                          <Link to="/shop">Landing</Link> 
//                  </div>
//                  </>  
//      );
// else if(name === "Pages" && double ) return(
//                      <>
//                      <div className="list">
//                          <Link to="/">About Us</Link>
//                              <Link to="/">Our Staff</Link> 
//                              <Link to="/">Pricing Tables</Link>   
//                              <Link to="/">Content Elements</Link> 
//                              <Link to="/">Recipies Grid</Link> 
//                              </div>
//                      </>
//                  );
// else if(name === "Shop" && double ) return(
//                     <>
//                     <div className="list">
//                             <Link to="/shop">Shop</Link>
//                             <Link to="/cart">Cart</Link> 
//                             <Link to="/checkout">Checkout</Link> 
//                             <Link to="/account">My account</Link> 
//                             </div>
//                     </>
//                 );

// else return null;

// }









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