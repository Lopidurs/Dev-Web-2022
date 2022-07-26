import React from "react"
import logo from "../assets/dressmaker.png"
import '../styles/Footer.css'

function Footer() {
    return(
        <div className={"footer"}>
            <div className={"left"}><p>gabrielle.squelin@gmail.com</p><p>+32 474 38 98 90</p></div>
            <div className={"center"}><img src={logo} alt={"logo"} /></div>
            <div className={"right"}>
                <a href={"https://www.youtube.com/channel/UCmIHM0130L4oG4Q01S_nrVg"}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="64" height="64"
                     viewBox="0 0 64 64"
                     fill="black"><path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"></path></svg>
                </a>
                <a href={"https://www.youtube.com/channel/UCmIHM0130L4oG4Q01S_nrVg"}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="64" height="64"
                     viewBox="0 0 64 64"
                     fill="black"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path></svg>
                </a>
                <a href={"https://www.youtube.com/channel/UCmIHM0130L4oG4Q01S_nrVg"}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="64" height="64"
                     viewBox="0 0 72 72"
                     fill="black"><path d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Footer