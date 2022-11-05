import React from "react";

import "../components/styles/Header.css"

export default function Header() {
    return <div id="Header">
        <a href="tel:+9779862903122" id="tel" className="link">call me (+977)9862903122 </a>
        <a href="mailto:timalsinasibindra@gmail.com" id="email" className="link">timalsinasibindra@gmail</a>
        <a href="" id="chat" className="link">let's chat</a>
    </div>;
}
