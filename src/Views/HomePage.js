import React,{useState} from 'react'
import Specality from '../Components/Specality';
import Content from '../Components/Content';
import Creation from '../Components/Creation';
import ContentTwo from '../Components/ContentTwo';
import Prices from '../Components/Prices';
import '../App.css';
import '../Responsive.css'

import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import  SplImg from "../images/divider_4.png"
import {ReactComponent as Curvy} from '../images/style_1_1.svg'


import  Client1 from "../images/client1.jpg"
import  Client2 from "../images/client2.jpg"
import  Client3 from "../images/client3.jpg"

import  Desk1 from "../images/desk_01.png"
import  Desk2  from "../images/desk_02.png"
import  Desk3  from "../images/desk_03.png"


import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"
import NavBar from '../Components/NavBar';
// import  HeaderBg1 from "../icons/headerbg.jpg"
// import  HeaderBg2 from "../icons/headerbg2.jpg"


export default function HomePage() {
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
  ])
    return (
        <> 
        <NavBar/>
{/* components */}
        <div className="pic-container">
        <div  className="image-card" > 
        {/* <TitleCarousel/> */}
         </div>
       
        <div className="icon-logo">
        <h1 className="icon-text">Welcome to Bellaria</h1>
        </div> 
        
         </div>

        <Specality/>
        <Content/>
        <div className="show-container">
        <img className="header-img"src={SplImg} alt="heading"/>
        <p className="header">Our Creations</p>  
        <div className='creation_wrapper'>
              {crationArr.map((item,index)=><Creation key={index}
              text={item.text}
              img={item.img}
              id={index} /> )}
            </div>
        {/* <ImageShow/> */}
        </div>
        <ContentTwo/>
        {/* <Creation/> */}
        <div className="rep-container">     
            <img className="header-img"src={SplImg} alt="headimg"/> 
            <h1>Recipies For You</h1> 
            <ImageCarousel/>
        </div>
        <div className="client-container">
          
            <br/>
            <br/>
            <h1>Client Says</h1>
            
    
            <ImageCarouselOne/>
            <div>
            <Curvy/>
          </div>
        </div>
        <Prices/>
</>
    );
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
        [1 ,2, 3]
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
    <div className="cardpic" >
     <img src={Desk1} alt="one"/>
  
    </div>
  );
  else if(item === 2)
  return(
    <div className="cardpic">
      <img src={Desk2} alt="two"/>
    </div>
  );
  else if(item === 3)
  return(
    <div className="cardpic">
       <img src={Desk3} alt="three"/>

    </div>
  );
  else return null;
  
}

function ImageCarouselOne(){
    const [items] = useState(
        [1 ,2, 3]
        );
    return(

        <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true}>
          {items.map((item) => (
            <Item key={item}><CarousalCardOne item={item}/></Item>
          ))}
        </Carousel>
        </div>
    )

}

function CarousalCardOne({item}){
    if(item === 1)
    return(
      <div className="client-pic" >
       <img src={Client1} alt="one"/>
    
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem imperdiet, venenatis</p>
        <p>eros ac,mattis mauris. Nam ac purus justo. Vivamus non hendrerit velit.</p>
      <h1>Maria Doe</h1>
      </div>
    );
    else if(item === 2)
    return(
      <div className="client-pic">
        <img src={Client2} alt="two"/>
      
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem imperdiet, venenatis</p>
        <p>eros ac,mattis mauris. Nam ac purus justo. Vivamus non hendrerit velit.</p>
      <h1>Ser Robert</h1>
      </div>
    );
    else if(item === 3)
    return(
      <div className="client-pic">
         <img src={Client3} alt="three"/>
   
      
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem imperdiet, venenatis</p>
        <p>eros ac,mattis mauris. Nam ac purus justo. Vivamus non hendrerit velit.</p>
      <h1>Eva Doe</h1>
      </div>
    );
    else return null;
    
  }