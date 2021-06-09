import React from 'react'
import {ReactComponent as SrollIcon} from '../icons/start icon.svg'
import { useEffect } from 'react'

export default function PageUp() {   
useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};
   }, [])
    return (
        <div className="page-up">
            <button id="myBtn" onClick={Up} className="nav-btn">
                <SrollIcon/>
        
            </button>
        </div>
   
    )
}

function scrollFunction() {
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