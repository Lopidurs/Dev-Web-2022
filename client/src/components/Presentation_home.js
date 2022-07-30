import React from 'react'
import '../styles/Presentation.css'
import '../styles/boutons.css'
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Presentation_home() {
    return (
        <div className={"presentation"}>
            <div className={"text_confection"}>
                <h1>La confection sur mesure: mon activité principal</h1>
                <p>Que se soit des robes de marié au costume homme en passant par les sous-vêtements, je réalise chacune
                    de
                    vos demandes pour un vêtement qui vous correspond.</p>
                <Link to="/confection">
                    <button className={"bouton_plein"}>Demander un devis</button>
                </Link>
            </div>
            <div className={"carousel"}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src="https://i.pinimg.com/736x/f3/21/ed/f321edbbca90f34f48ab27c442058ee4.jpg" alt={""}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.mariee.fr/wp-content/uploads/2021/10/syn_k_1.jpeg" alt={""}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://cdn0.mariages.net/article-dress/7537/original/1280/jpg/m787357.jpeg" alt={""}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0321/4684/9836/products/702471640423858176_1600x.jpg?v=1594624518"
                            alt={""}/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={"text_cours"}>
                <h1>La confection sur mesure: mon activité principal</h1>
                <p>Que se soit des robes de marié au costume homme en passant par les sous-vêtements, je réalise chacune
                    de
                    vos demandes pour un vêtement qui vous correspond.</p>
                <Link to="/cours">
                    <button className={"bouton_plein"}>Voir tous les cours</button>
                </Link>
            </div>
            <div className={"img"}>
                <img src={"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fcontent.2Fuploads.2F2012.2F12.2Fsac-tarte.2Ejpg/1200x600/quality/80/crop-from/center/cours-de-couture-les-premiers-pas.jpeg"} alt={""}/>
            </div>
        </div>
    )
}

export default Presentation_home