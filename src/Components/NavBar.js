import React,{useState} from 'react'
import '../App.css';
import texttitle from '../icons/textheading.png';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default function NavBar() {
        // doubledrop
        const [doubleA, setDoubleA] = useState(false);
        const [doubleB, setDoubleB] = useState(false);
        const [doubleC, setDoubleC] = useState(false);
    
    
        const [drop] = useState(
            [
           {main:<>
            <p className="parent" onClick={()=>setDoubleA(!doubleA)}> 
    
           <Link to="/">Home</Link>
           </p>
                 <span className="arrow">
                             <button className="nav-btn" >  
                             <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
                               <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                              </svg>
                             </button>
                             </span></>
           ,
            text: "Home",
            id: 0
           ,
    
             }, 
           {main: <>
            <p className="parent" onClick={()=>setDoubleB(!doubleB)}> 
    
           <Link to="/pages"> Pages </Link>
           </p>
                 <span className="arrow">
                 <button className="nav-btn" >  
                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
                   <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                 </button>
                 </span></>
           ,
           text: "Pages",
           id:1
        },
           {main:<>
            <p className="parent" onClick={()=>setDoubleC(!doubleC)}> 
    
           <Link to="/shop"> Shop </Link>
           </p>
                 <span className="arrow">
                 <button className="nav-btn" >  
                 <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="18" height="16" viewBox="0 0 24 24">
                   <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                 </button>
                 </span></>
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

    return ( <>
        <div id="top" className="nav-bar">
           <Link to="/"><img className="text-title" src={texttitle}  alt="Belaria" />
           </Link>
            <nav>
                <ul>
                <Cart><div className="cart-item">
                    no products in the cart</div></Cart>
                <Search/>
              {/* Menu Dropdown */}
                    <button className="nav-btn" onClick={()=> setOpen(!open)}>  
             {!open &&  <span className="menu-uni"></span>}
             {open &&  <span className="menu-uni-open"></span>}
     </button>  
       
       <div className="dropdown">
                    
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
               
                </ul>
            </nav> 
        </div>
         </>
    )

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

