import React from 'react'
import heart from '../images/heart2.png'
import {ReactComponent as BorderBtn} from '../icons/splbtn.svg'
import {ReactComponent as Curvy} from '../images/style_1_1.svg'
import { Up } from './PageUp'
export default function Content() {
    return (<>
        
          <div className="cont-container"> 
          <span><Curvy clip="path" id="topbg" width="inherit" height="inherit"/></span>
          <div className="bg-overlay">  </div>
          <img className="heart" src={heart} alt="logo"/>
          
            <h1>Magic Processing</h1>
            <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent molestie eu turpis nec molestie. Nam auctor magna mauris, non lacinia felis mattis nec.
            </p>
            <button onClick={Up}><BorderBtn fill="#ffffff"/>Discover More</button>
         </div>
        
         </>
    )
}
