import React from 'react'
import {ReactComponent as BorderBtn} from '../icons/splbtn.svg'
import { Up } from './PageUp'
export default function ContentTwo() {
    return (
        <div className="cont-containertwo">
                <p>lorem iposm solt</p>
                <p>lorem iposm solt</p>
                <p>lorem iposm solt</p>
                <p>lorem iposm solt</p>
          <button onClick={Up}><BorderBtn fill="#ffffff"/>Order Now</button>
      </div>
    )
}
