import React from 'react'
import Specality from '../Components/Specality';
import Content from '../Components/Content';
import Creation from '../Components/Creation';
import ContentTwo from '../Components/ContentTwo';
import '../App.css';


export default function HomePage() {
    return (
        <> 
{/* components */}
        <div className="pic-container">
        <div className="image-card"> 
        <div className="icon-logo">
        <h1 className="icon-text">Welcome to Bellaria</h1>
        </div> 
        </div>
         </div>
        <Specality/>
        <Content/>
        <Creation/>
        <ContentTwo/>
        <div className="rep-container">
            <br/>
            <br/>
            <h1>Recipies For You</h1>
        </div>
        <div className="price-container">
            <p>Our Prices</p>
        </div>
</>
    );
}
