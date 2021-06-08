import React from 'react'
import {ReactComponent as SrollIcon} from '../icons/start icon.svg'

export default function PageUp() {
    return (
        <div className="page-up">
            <button id="myBtn" onClick={Up} className="nav-btn">
                <SrollIcon/>
            {/* <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  width="28" height="28" viewBox="0 0 24 24">
             <path fill="#000000" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>  */}
            </button>
        </div>
   
    )
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.visibility='visible';
  } else {
    document.getElementById('myBtn').style.visibility='hidden';
  }
}

export function Up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}