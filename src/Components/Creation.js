
import React from 'react'
import  PicBg  from "../images/slider_bg_1.png"
import { Link } from 'react-router-dom'

export default function Creation(props) {
    const {text,img,id}=props
    return (
      <Link to={"/" + id}> <div className="creation" style={{backgroundImage: `url("${img}")`}}>
            <div className='creation-hover'>
                <img src={PicBg} className="hover-img"alt="hover" />
                <p>{text}</p>
            </div>
        </div></Link> 
    )
}
