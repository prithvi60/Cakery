import React from 'react'
// import ContentBg from '../images/contentbg2.jpg'
import {ReactComponent as BorderBtn} from '../icons/splbtn.svg'
import {ReactComponent as Ribbon} from '../icons/ribbons.svg'
import {ReactComponent as Pie} from '../icons/001-cake.svg'
import {ReactComponent as Strawberry} from '../icons/003-strawberry.svg'
import {ReactComponent as CupCake} from '../icons/002-cupcake.svg'

import { Up } from './PageUp'
export default function ContentTwo() {
    return (
        <div className="cont-containertwo">
            
          {/* <img className="cont-bgtwo" src={ContentBg} alt="logo"/> */}
                <span>
                    <Ribbon/>
                    <h2 >Tradition</h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Nam consectetur facilisis aliquet.</p>
                </span>
                
                <span>
                    <Pie/>
                    <h2 >Quality</h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Nam consectetur facilisis aliquet.</p>
                </span>

                 <span>
                     <Strawberry/>
                     <h2 >Creativity</h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Nam consectetur facilisis aliquet.</p>
                </span>

                <span>
                    <CupCake/>
                    <h2 >Passion</h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Nam consectetur facilisis aliquet.</p>
                </span>
          <button onClick={Up}><BorderBtn fill="#ffffff"/>Know us Better</button>
       
      </div>
    )
}
