import React,{useState} from 'react'
import './App.css';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import {ReactComponent as Carous1} from "./icons/carousel1.svg"
import {ReactComponent as Carous2} from "./icons/carousel2.svg"
import {ReactComponent as Carous3} from "./icons/cake3.svg"
import {ReactComponent as Carous4} from "./icons/cake4.svg"


export default function Specality() {
    return (
        <div className="spl-container">  
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
  width: 100%;
  background-color: transparent;
  color: black;
  margin: 15px;
  font-size: 13px;
`;

function ImageCarousel(){
    const [items] = useState(
        [1 ,2, 3, 4,5,6,7,8,9]
        );
    return(

        <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}><CarousalCard item={item}/></Item>
          ))}
        </Carousel>
        </div>
    )

}

function CarousalCard({item}){
  if(item == 1)
  return(
    <div>
    <Carous1/>
    <h1>Cupcake</h1>
    <p>{item}</p>
    </div>
  );
  else if(item == 2)
  return(
    <div>
    <Carous2/>
    <h1>Macaroons</h1>
    <p>{item}</p>
    </div>
  );
  else if(item == 3)
  return(
    <div>
    <Carous3/>
    <h1>Occasion Cakes</h1>
    <p>{item}</p>
    </div>
  );
  else if(item == 4)
  return(
    <div>
    <Carous4/>
    <h1>Small Cakes</h1>
    <p>{item}</p>
    </div>
  );
  else return null;
  
}