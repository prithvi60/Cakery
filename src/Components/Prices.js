import React from 'react'
import {ReactComponent as OrderBg} from '../images/orderbg.svg'
import  Donut from '../images/pr-table1.png'
import  Donut2 from '../images/pr-table2.png'
import {ReactComponent as BorderBtn} from '../icons/splbtn.svg'


import { Up } from './PageUp'

export default function Prices() {
    return (
        <div className="price-container">
        <h1>Our Prices</h1>
           
       
        <span>
        <img className="donut-bg" src={Donut} alt="logo"/>
           <div className="svg-bg"><OrderBg/></div> 
            <h2>Ocassion cakes</h2>
            <p>95$</p>
            <ul>
                <li>10 x Sweet Aniseed</li>
                <li>10 x Soft Fruits</li>
                <li>10 x Assorted</li>
                <li>10 x Flavour Mix</li>
            </ul>
            <button onClick={Up}><BorderBtn fill="#000000"/>Order Now</button>
        </span>
        
        <span>
        <img className="donut-bg2" src={Donut2} alt="logo"/>
           <div className="svg-bg2"><OrderBg/></div> 
            <h2>Small cakes</h2>
            <p>95$</p>
            <ul>
                <li>10 x Sweet Aniseed</li>
                <li>10 x Soft Fruits</li>
                <li>10 x Assorted</li>
                <li>10 x Flavour Mix</li>
            </ul>
            <button onClick={Up}><BorderBtn fill="#000000"/>Order Now</button>
        </span>
    </div>
    )
}
