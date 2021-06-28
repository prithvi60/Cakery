import React,{ useState } from 'react'
import Slab from '../Components/Slab'
import Creation from '../Components/Creation';


import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"


import {ReactComponent as CurvyTop} from '../images/shape_copyright_1.svg'
import NavBar from '../Components/NavBar';



export default function Shop() {
   // sort bar
   const [opensort,setOpenSort] = useState(false);
   const [sort] = useState([
   {text:<p> Default sort</p>},
   {text:<p> Sort by price low</p>},
   {text:<p> Sort by rating</p>},
   {text:<p> Sort by price high</p>}
   ]);

    const [crationArr] = useState([
        {
          img:Pic1,
          text:"ABC"
        },
        {
          img:Pic2,
          text:"PQR"
        },
        {
          img:Pic3,
          text:"PQR"
        },
        {
          img:Pic4,
          text:"PQR"
        },
        {
          img:Pic1,
          text:"ABC"
        },
        {
          img:Pic2,
          text:"PQR"
        },
        {
          img:Pic3,
          text:"PQR"
        },
        {
          img:Pic4,
          text:"PQR"
        },
        {
            img:Pic4,
            text:"PQR"
         }
      ])
    return (
        <>
        <NavBar/>
            <Slab header="Shop" para="Home"/>

            <div className="show-container" style={{transform: "translateY(20px)"}}>
            <div>
                 <CurvyTop/>
            </div>

             {/* sort bar */}
           <button style={{transform: "translateX(20px)"}} onClick={()=> setOpenSort(!opensort)}/>  
                {opensort && sort.map((item)=> item.text )} 

        <div className='creation_wrapper'style={{transform: "translateY(100px)"}} >
              {crationArr.map((item,index)=><Creation key={index}
              text="Add to Cart"
              img={item.img}/>)}
            </div>
        </div>
        </>
    )
}
