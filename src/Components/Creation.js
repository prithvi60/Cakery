import React,{useState} from 'react'
import  SplImg from "../images/divider_4.png"

import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"

import  PicBg  from "../images/slider_bg_1.png"

export default function Creation() {
    return (
        <div className="show-container">
        <img className="header-img"src={SplImg} alt="heading"/>
        <p className="header">Our Creations</p>  
        <ImageShow/>
        </div>
    )
}

function ImageShow(){
    const [open, setOpen] = useState(
       { btn1: false}, { btn2: false}, { btn3: false}, { btn4: false},
        )
    const [item,setItem] = useState(0)
    const [id,setId] = useState(0)
    return(
        <div className="show-grid">
       
       <span>
        <button id="1" className="invisible" onClick={()=>{setOpen(!open.btn1);setItem(1);setId(1)}}>
        <img className="show-img"src={Pic1} alt="heading" />
        </button>
        {id === 1 &&<ImageDetails open={open} item={item}/>}
        </span> 
       
        <span>
        <button id="2" className="invisible" onClick={()=>{setOpen(!open.btn2);setItem(2);setId(2)}}>
        <img className="show-img"src={Pic2} alt="heading"/>
        </button>
        {id === 2 &&<ImageDetails open={open} item={item}/>}
        </span> 

        <span>
        <button id="3" className="invisible" onClick={()=>{setOpen(!open.btn3);setItem(3);setId(3)}}>
        <img className="show-img"src={Pic3} alt="heading"/>
        </button>
        {id === 3 &&<ImageDetails open={open} item={item}/>}
        </span> 

        <span>
        <button id="4" className="invisible" onClick={()=>{setOpen(!open.btn4);setItem(4);setId(4)}}>
        <img className="show-img"src={Pic4} alt="heading"/>
        </button>
        {id === 4 &&<ImageDetails open={open} item={item}/>}
        </span> 
        </div>   
    )
}

function ImageDetails({open,item}){
if(open) return(
<div className="show-inside">
     {console.log(open)}
    <img className="show-img"src={PicBg} alt="heading"/>
    { item === 1 && <p>Loren ipsum solt1</p>}
    { item === 2 && <p>Loren ipsum solt2</p>}
    { item === 3 && <p>Loren ipsum solt3</p>}
    { item === 4 && <p>Loren ipsum solt4</p>}
</div>
    );
else return null;

}