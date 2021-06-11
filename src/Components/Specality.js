import React,{useState} from 'react'
import '../App.css';

import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import  SplImg from "../images/divider_4.png"
import  Carous1 from "../icons/cake1.png"
import  Carous2 from "../icons/cake2.png"
import  Carous3 from "../icons/cake3.png"
import  Carous4 from "../icons/cake4.png"


export default function Specality() {
    return (
        <div className="spl-container">  
        <img className="header-img"src={SplImg} alt="headimg"/>
        <p className="header">Our Speciality</p>   
        <ImageCarousel/>
        </div>
    )
}
// Carousel
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const Item= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background-color: transparent;
  color: black;
  margin: 35px;
  font-size: 13px;
`;

function ImageCarousel(){
    const [items] = useState(
        [1 ,2, 3, 4,5,6,7,8,9]
        );
    return(

        <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true}>
          {items.map((item) => (
            <Item key={item}><CarousalCard item={item}/></Item>
          ))}
        </Carousel>
        </div>
    )

}

function CarousalCard({item}){
  if(item === 1)
  return(
    <div className="card" >
     <img src={Carous1} alt="one"/>
  
    <h1>Cupcake</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  
    </div>
  );
  else if(item === 2)
  return(
    <div className="card">
      <img src={Carous2} alt="two"/>
    
    <h1>Macaroons</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
 
    </div>
  );
  else if(item === 3)
  return(
    <div className="card">
       <img src={Carous3} alt="three"/>
 
    <h1>Occasion Cakes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

    </div>
  );
  else if(item === 4)
  return(
    <div className="card">
       <img src={Carous4} alt="four"/>
 
    <h1>Small Cakes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
   
    </div>
  );
  else if(item === 5)
  return(
    <div className="card">
     <img src={Carous1} alt="one"/>

    <h1>Cupcake</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
 
    </div>
  );
  else if(item === 6)
  return(
    <div className="card">
       <img src={Carous4} alt="four"/>
  
    <h1>Small Cakes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
 
    </div>
  );
  else if(item === 7)
  return(
    <div className="card">
       <img src={Carous3} alt="three"/>
 
    <h1>Occasion Cakes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
 
    </div>
  );
  else if(item === 8)
  return(
    <div className="card">
      <img src={Carous2} alt="two"/>

    <h1>Macaroons</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
 
    </div>
  );
  else if(item === 9)
  return(
    <div className="card">
     <img src={Carous1} alt="one"/>
    <h1>Cupcake</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  
    </div>
  );
  else return null;
  
}
