import React from "react";
import photo from "../assets/GabrielleSquelin.jpg"
import "../styles/Propos.css"

function Propos() {
    return (
        <div className="container">
            <div className={"container-propos"}>
                <h1>Gabrielle Squelin</h1>
                <div className={"photo"}>
                    <img src={photo} alt={"photo de Gabrielle Squelin"}/>
                </div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div>Sed varius auctor lacus. Morbi sit amet massa viverra, viverra augue nec, elementum felis. Fusce
                    fermentum faucibus enim. Nulla et arcu porta, porttitor libero ac, maximus neque. Cras vitae tempus
                    dolor. Morbi tortor tortor, pellentesque eu dapibus egestas, laoreet quis augue. Quisque quis arcu
                    faucibus, porta velit id, commodo lectus. Vivamus et metus enim. Nunc sit amet erat tempus, auctor
                    lectus sed, lacinia urna. Nunc quam ante, molestie eget velit id, finibus scelerisque diam.
                </div>
                <h2>Vivamus vitae vestibulum felis.</h2>
                <div>
                    Praesent leo magna, tempor a tempor sit amet, volutpat sed nisi. In leo nisi, cursus nec felis vel,
                    finibus cursus est. Sed nec bibendum lectus. Nullam semper justo a semper gravida. Sed facilisis,
                    sem et
                    accumsan dictum, arcu augue ullamcorper metus, nec ullamcorper justo libero vel elit. Proin
                    dignissim
                    lacus quis neque finibus fermentum. Maecenas tempus leo at eleifend ultrices. Nulla vehicula
                    sollicitudin enim sed finibus. In nec nunc vitae neque sollicitudin blandit. Donec et metus maximus,
                    aliquam purus aliquam, sollicitudin nisl. Fusce interdum dui ut volutpat eleifend. Pellentesque
                    accumsan
                    lacinia volutpat. Vivamus elementum consequat magna. Fusce sed sapien quis nunc tristique volutpat.
                </div>
                <h2>Nulla quis lectus nunc.</h2>
                <div>Praesent venenatis quam eu elementum varius. Phasellus id elit ut lacus vestibulum sagittis.
                    Phasellus
                    elit augue, semper quis dictum sit amet, auctor ac nunc. Suspendisse vulputate turpis a ante
                    viverra,
                    vitae porttitor purus mollis. Praesent id lorem libero. Fusce lacinia vulputate orci sit amet
                    vulputate.
                    Duis felis lacus, cursus et augue sed, euismod pellentesque purus. Suspendisse dictum semper odio
                    sed
                    euismod. Mauris facilisis id risus vitae egestas. Quisque facilisis convallis arcu, in hendrerit
                    nulla
                    bibendum non. In sit amet venenatis lacus, venenatis pretium nibh. Phasellus vitae nisi vitae justo
                    pulvinar egestas. Proin sit amet dictum arcu, et interdum sem.
                </div>
                <h2>Nunc pulvinar magna eget leo venenatis, eu lobortis mi fermentum.</h2>
                <div>Praesent in erat a dolor tempor volutpat. Proin tempus risus nisi, et convallis ex fermentum id.
                    Sed
                    condimentum pellentesque urna, at malesuada orci aliquam id. Morbi in nisi eu leo semper fringilla
                    tristique quis nisl. Suspendisse nec feugiat nisi. Praesent massa justo, pellentesque vitae
                    sollicitudin
                    ut, elementum ut dolor.
                </div>
                <div className={"map"}>
                    <h2>Où me retrouver.</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.46893147435!2d4.560895415904723!3d50.65555338044561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d5eda596fe25%3A0x43ace57393236b45!2sAv.%20Provinciale%20110%2C%201341%20Ottignies-Louvain-la-Neuve!5e0!3m2!1sfr!2sbe!4v1659019882860!5m2!1sfr!2sbe"
                        width="100%" height="450px" style={{ border : 0}} allowFullScreen="" loading={"lazy"}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Propos