import React, { useEffect, useState } from 'react'

import { Container } from "./styles.js";
import logo from "../../assets/small-logo-navbar.png"

export default function Navbar() {

    const [isOnTop, setIsOnTop] = useState(false);

    window.onscroll = function() {myFunction()};


    function myFunction() {
        if(window.pageYOffset <= 560){
            setIsOnTop(false)
        }else{
            setIsOnTop(true)
        }
    }


    return (
        <Container top={isOnTop} id="myHeader">
            <ul>
                <li>
                    <img src={logo} alt="small-logo-navbar" />
                </li>
                <span>
                    <li><a href="!#">Sobre</a></li>
                    <li><a href="!#">Eventos</a></li>
                    <li><a href="!#">Parceiros</a></li>
                    <li><a href="!#">Conteúdos</a></li>
                    <li><a href="!#">Contatos</a></li>
                </span>
            </ul>
        </Container>
    )
}

