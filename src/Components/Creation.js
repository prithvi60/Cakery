import React,{useState} from 'react'
import  SplImg from "../images/divider_4.png"

import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"

export default function Creation() {
    return (
        <div className="show-container">
        <img className="header-img"src={SplImg} alt="headimg"/>
        <p className="header">Our Creations</p>  
        <ImageShow/>
        </div>
    )
}

function ImageShow(){
    const [open, setOpen] = useState(false)
    return(
        <div className="show-grid">
        <img className="show-img"src={Pic1} alt="headimg" onClick={()=>setOpen(!open)}/>
        <ImageDetails/>
        <img className="show-img"src={Pic2} alt="headimg"/>
        <img className="show-img"src={Pic3} alt="headimg"/>
        <img className="show-img"src={Pic4} alt="headimg"/>
        </div>   
    )
}

function ImageDetails({open}){
if(open) return(
<div>
    <p>Loren ipsum solt</p>
</div>
    );
else return null;

}