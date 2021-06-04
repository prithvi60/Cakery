import React,{useState} from 'react'
import './App.css';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import {ReactComponent as CurveImg} from "./icons/curve.svg"
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
  color: #683bb7;
  margin: 15px;
  font-size: 4em;
`;

function ImageCarousel(){
    const [items, setItems] = useState(
        [<Carous1/>  , <Carous2/>, <Carous3/>, <Carous4/>]
        );
    return(

        <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
        </div>
    )

}

