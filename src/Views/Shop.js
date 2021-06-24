import React,{ useState } from 'react'
import Slab from '../Components/Slab'
import Creation from '../Components/Creation';


import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"


import {ReactComponent as CurvyTop} from '../images/shape_copyright_1.svg'



export default function Shop() {
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
            <Slab header="Shop" para="Home"/>

            <div className="show-container">
            <div>
                 <CurvyTop/>
            </div>
        <div className='creation_wrapper'>
              {crationArr.map((item,index)=><Creation key={index}
              text="Add to Cart"
              img={item.img}/>)}
            </div>
        </div>
        </>
    )
}
