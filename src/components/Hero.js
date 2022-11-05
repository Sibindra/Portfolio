import React from "react";

import "../components/styles/Hero.css";

import article from "../images/article.svg";

export default function Hero() {
    return (
        <div id="Hero">
            {/* first container */}
            <div id="container1">
                <div id="about">
                    <hr id="line"/>
                    <button id="about-btn">About</button>
                </div>

                {/* text container inside first container*/}
                <div id="textcontainer">
                    <h1 id="title">
                        Hi,
                        <br />I am Sibindra Timalsina
                    </h1>

                    <h3 id="caption">Developer and Tech Enthuasist</h3>

                    <h5 id="desc">
                        I make amazing, minimal and clean design and webpages
                        for you !
                    </h5>

                    <div id="buttoncontainer">
                        <button id="hire">Hire Me</button>
                    </div>
                </div>
            </div>

            <div id="container2">
                <img src={article} alt="#" id="image" />
            </div>
        </div>
    );
}
