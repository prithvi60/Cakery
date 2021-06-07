import React from 'react'
import heart from '../images/heart2.png'
export default function Content() {
    return (
        <div className="cont-container">
          
          <img className="heart" src={heart} alt="logo"/>
          
            <h1>Magic Processing</h1>
            <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent molestie eu turpis nec molestie. Nam auctor magna mauris, non lacinia felis mattis nec.
            </p>
            <button>Discover More</button>
        </div>
    )
}