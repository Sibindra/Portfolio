import React from "react";

import"../components/styles/Footer.css"

import github from "../images/icons/github.svg"
import insta from "../images/icons/instagram.svg"
import messenger from "../images/icons/messenger.svg"


export default function Footer(){
    return( 
        <div id="Footer">
            <div id="footercontainer">
                <img src={github} alt="github" className="icons"  href="https://github.com/Sibindra"/>
                <img src={insta} alt="instagram" className="icons" href="https://www.instagram.com/timalsina_sibindra/"/>
                <img src={messenger} alt="messenger" className="icons" href="https://m.me/sibindratimalsina"/>
            </div>
        </div>
    )
}
