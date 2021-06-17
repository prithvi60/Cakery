import React from "react";
import heart from "../images/heart2.png";
import { ReactComponent as BorderBtn } from "../icons/splbtn.svg";
// import {ReactComponent as Curvy} from '../images/style_1_1.svg'
import { Up } from "./PageUp";
import DiscoverButton from "./DiscoverButton";

import styleImg from "../images/style_1_2.svg";

export default function Content() {
  return (
    <>
      {/* <div className="bg-overlay"></div> */}
      <div className="cont-container">
        <div className="cws-image-bg-wrap">
          <div className="cws-image-bg">
            <div className="cws-overlay-bg " />
          </div>
        </div>
        <div className="content">
          <img className="heart" src={heart} alt="logo" />

          <h1>Magic Processing</h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Praesent molestie eu turpis nec molestie. Nam
            auctor magna mauris, non lacinia felis mattis nec.
          </p>

          <DiscoverButton />
        </div>

        {/* <button onClick={Up}>
          <BorderBtn fill="#ffffff" />
          Discover More
        </button> */}
      </div>
    </>
  );
}
