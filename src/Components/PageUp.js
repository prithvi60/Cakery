import React from 'react'
import {ReactComponent as SrollIcon} from '../icons/start icon.svg'
// import {ReactComponent as Curve} from '../images/Pageup.svg'
import { useEffect } from 'react'

export default function PageUp() {   
useEffect(() => {
  document.getElementById('myBtn').style.visibility='hidden';
    // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {ScrollFunction()};
   }, [])
    return (
        <div className="page-up">
            <button  id="myBtn" onClick={Up} className="nav-btn">
                <SrollIcon/>
                {/* <Curve width="12px" height="12px" fill="red"/> */}
            </button>
        </div>
   
    )
}

function ScrollFunction() {
     
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('myBtn').style.visibility='visible';
  } else {
    document.getElementById('myBtn').style.visibility='hidden';
  }
}

export function Up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}