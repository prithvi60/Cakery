import React from 'react'
import Slab from '../Components/Slab'
import  Pic1 from "../images/bg1.jpg"
import {ReactComponent as CurvyTop} from '../images/shape_copyright_1.svg'



export default function Shop() {
    return (
        <div>
            <Slab header="Shop" para="Home"/>
       <div className="shop-container">  
            <div>
            <CurvyTop/>
                </div>
            <span className="shop-drop">Sort by popularity</span>
        <img className="show-img"src={Pic1} alt="heading" />

        </div>
        </div>
    )
}
