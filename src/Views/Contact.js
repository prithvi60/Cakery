import React from 'react'
import Slab from '../Components/Slab'
import  SplImg from "../images/divider_4.png"

export default function Contact() {
    return (
        <div>
           <Slab header="Contact Us" para="Home"/>
           <div className="contact-container">
           <img className="header-img"src={SplImg} alt="heading"/>
            <p className="header">Our Contacts</p> 
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor, odio id facilisis, mauris dolor rhoncus elit, ultricies nulla eros at dui. In suscipit leo sagittis aliquam.
            </span> 
                <div className="contact-col">
                    <h4 >Opening Hours</h4>
                    <p>Monday – Friday</p>
                    <p >08:00 – 17:30</p>
                    <p>Saturday</p>
                    <p >09:00 – 16:00</p>
                    <p>Sunday</p>
                    <p >CLOSED</p>
                </div>

                <div className="contact-col-send">
                <h4 >Send Message</h4>
                <input  className="input-group-text" type="text" placeholder="Your Name"/>               
                <input  className="input-group-text" type="text" placeholder="Your Email"/>
                <input  className="input-group-text" type="text" placeholder="Type Message"/>
                 <button className="mail-btn">Send</button>
                 </div>

                <div className="contact-col">
                <h4>Our Contacts</h4>
                    <p>785 Carriage Drive, Jacksonville</p>
                    <p>Beach, FL</p>
                    <p>+1 203-284-2818</p>
                    <p>+1 203-284-2919</p>
                    <p>info@your-site.com</p>
                    <p>&nbsp;sales@your-site.com</p>
                </div>

            </div>
        </div>
    )
}
