import React,{useState} from 'react'
import '../App.css';
import texttitle from '../icons/textheading.png';
import {Link} from 'react-router-dom';
// import { Multiselect } from 'multiselect-react-dropdown';

export default function NavBar() {

    return ( <>
        <div id="top" className="nav-bar">
           <Link to="/"><img className="text-title" src={texttitle}  alt="Belaria" />
           </Link>
            <nav>
                <ul>
                <Cart><div className="cart-item">
                    no products in the cart</div></Cart>
                <Search/>
                <Menu >
                   <DoubleDrop/>
                </Menu>
               
                </ul>
            </nav> 
        </div>
         </>
    )

}
// // multiselect
// function Menu(props){
//     const [open,setOpen] = useState(false);
//     const [options,setOptions]=useState(
//         {name: 'Srigar', id: 1},{name: 'Sam', id: 2}  
//     );
//     return(
//         <li className="logo">   
                        
//        <button className="nav-btn" onClick={()=> setOpen(!open)}>  
//             <svg className="menu" xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="24" height="24" viewBox="0 0 24 24">
//             <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
//             </svg>          
//         </button>  
      
//        {/* {open && props.children} */}
//        <Multiselect
//             options={options} // Options to display in the dropdown
//             selectedValues={selectedValue} // Preselected value to persist in dropdown
//             onSelect={onSelect} // Function will trigger on select event
//             onRemove={onRemove} // Function will trigger on remove event
//             displayValue="name" // Property name to display in the dropdown options
//             />
//        </li>
//     );
//     }

//     function onSelect(selectedList, selectedItem){
//         return null;
//     }
    
//     function onRemove(selectedList, removedItem){
//         return null;
//     }

// multiselect end

function Menu(props){
const [open,setOpen] = useState(false);
return(
    <li className="logo">   
                    
   <button className="nav-btn" onClick={()=> setOpen(!open)}>  
        {/* <svg className="menu" xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg> 
                  */}
             {!open &&  <span className="menu-uni"></span>}
             {open &&  <span className="menu-uni-open"></span>}
    </button>  
   {open && props.children}
   </li>
);
}

function DoubleDrop(){
    const [open,setOpen] = useState(false);
    const[item,setItem] =useState(0);
    return(
        <div className="dropdown">
        <p className="parent" onClick={() =>{setOpen(!open);setItem(1);}}> 
           <Link to="/">Home</Link>
            <span className="arrow">
            <button className="nav-btn" >  
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
             <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            </button>
            </span>
            <DoubleDropItem value={1}item={item} open={open}>
             
            </DoubleDropItem>
       
            </p>
       
        <p className="parent" onClick={() => {setOpen(!open);setItem(2);}}>
            <Link to="/pages"> Pages </Link>
        <span className="arrow">
            <button className="nav-btn" >  
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
             <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            </button>
            </span>
            <DoubleDropItem value={2} item={item} open={open}>
              
            </DoubleDropItem>
           
        </p>
        <p className="parent"  onClick={()=> {setOpen(!open);setItem(3);}}>
        <Link to="/portfolio"> Portfolio </Link>
        <span className="arrow">
            <button className="nav-btn">  
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
             <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            </button>
            </span>
            <DoubleDropItem value={3} item={item} open={open}>
           
            </DoubleDropItem>
        
        </p>
        <p className="parent" onClick={()=> {setOpen(!open);setItem(4);}}>
        <Link to="/blog"> Blog </Link>
        <span className="arrow">
            <button className="nav-btn" >  
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
             <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            </button>
            </span>
            <DoubleDropItem value={4} item={item} open={open}>
              
            </DoubleDropItem>
          </p>  
        <p className="parent"  onClick={()=>{setOpen(!open);setItem(5);}}> 
        <Link to="/shop"> Shop </Link>
        <span className="arrow">
            <button className="nav-btn">  
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
             <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            </button>
            </span>
            <DoubleDropItem value={5} item={item} open={open}/>
        </p>
        <p className="parent"> <Link to="/contact">Contacts</Link>
        </p>
       </div>

    )

}

function DoubleDropItem(props){
   if(props.open && props.item ===1 && props.item === props.value) return(
        <>   
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
    );
    else if(props.open && props.item ===2 && props.item === props.value) return(
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
    else if(props.open && props.item ===3 && props.item === props.value) return(
        <>
            <div className="list">
                <Link to="/">Masonry</Link>
                <Link to="/">Masonry wide</Link> 
                <Link to="/">Wide</Link> 
                <Link to="/">With Filter</Link> 
                <Link to="/">Two Columns</Link> 
                <Link to="/">With Sidebar</Link> 
                <Link to="/">Square</Link> 
                </div>
        </>
    );
    else if(props.open && props.item ===4 && props.item === props.value) return(
        <>
                <div className="list">
                 <Link to="/">Checkerboard</Link>
                <Link to="/">Standard</Link> 
                <Link to="/">Masonry</Link> 
                </div>
        </>
    );
    else if(props.open && props.item ===5 && props.item === props.value) return(
        <>
        <div className="list">
                  <Link to="/">Shop</Link>
                <Link to="/">Cart</Link> 
                <Link to="/">Checkout</Link> 
                <Link to="/">My account</Link> 
                </div>
        </>
    );
    else
    return null;
}

function Cart(props){
    const [open,setOpen] = useState(false);
    return(
        <li className="logo">   
                        
       <button className="nav-btn" onClick={()=> setOpen(!open)}>  
       <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />                                         
                        </svg>
                     
        </button>  
       {open && props.children}
       </li>
    );
    }
    
    function Search(){
        const [open,setOpen] = useState(false);

       return(
        <li>
        <button className="nav-btn" onClick={()=> setOpen(!open)}> 
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>   
                    </button>  
                    
                    <SearchItem open={open} setOpen={setOpen}>
                 
                   </SearchItem>
        </li>
            
             

              );
       }
    

    function SearchItem({open,setOpen}){
       if(open) return(   
            <>
            <div className="search-overlay">     
             <input  className="search-text" type="text" placeholder="Search..."/>
             <button className="del-btn" onClick={()=>setOpen(!open) }>X</button>
            </div>
           
              </>
        );  
        else
        return null;
    }

