import React from 'react'

import {ReactComponent as Fb} from '../icons/002-facebook.svg'
import {ReactComponent as Twitter} from '../icons/003-twitter.svg'
import {ReactComponent as Insta} from '../icons/001-instagram.svg'
import {ReactComponent as Youtube} from '../icons/005-youtube.svg'
import {ReactComponent as Pinterest} from '../icons/004-pinterest.svg'
import {ReactComponent as Mail} from '../icons/006-email.svg'

import LogoBg from '../images/Bellaria_logo_big.png'

export default function EmailField() {
    return (<>
    <div className="mail-container">
    <p className="header-mail">Follow Us</p>  
    
        <div className="mail-field" >
            <input  className="input-group-text" type="text" placeholder="Your Email Address"/>
            <button className="mail-btn"><Mail/></button>
        </div >
        <div className="soc-row">
        <button className="soc-btn"><Fb/></button>
            <button className="soc-btn"><Twitter/></button>
            <button className="soc-btn"><Insta/></button>
            <button className="soc-btn"><Youtube/></button>
            <button className="soc-btn"><Pinterest/></button>
            </div>
            <img className="logo-bg" src={LogoBg} alt="logo"/> 
            <br/>
        <p className="header-mail">Get Our Sweet News</p>
        </div>

        </>
    )
}
