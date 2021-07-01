import React, { useState } from 'react'

import { Container } from "./styles.js";
import logo from "../../assets/small-logo-navbar.png"

export default function Navbar() {

    const [isOnTop, setIsOnTop] = useState(false)
    const [box, setBox] = useState()

    window.onscroll = function () {
        myFunction()
        setBox(document.querySelector("#myHeader"))
    };

    function myFunction() {
        if (box) {
            const compHeight = box.offsetHeight
            const height = window.innerHeight
            if (window.pageYOffset <= height - compHeight) {
                setIsOnTop(false)
            } else {
                setIsOnTop(true)
            }
            console.log(`Is it on top ? ${isOnTop}`)
        }
    }

    return (
        <Container top={isOnTop} id="myHeader">
            <ul>
                <li>
                    <a href="#FIRST"><img src={logo} alt="small-logo-navbar" /></a>
                </li>
                <span>
                    <li><a href="#EVENTOS">Eventos</a></li>
                    <li><a href="#ABOUTUS">Sobre</a></li>
                    <li><a href="#PARCEIROS">Parceiros</a></li>
                    <li><a href="#CONTENT">Conteúdos</a></li>
                    <li><a href="#CONTACT">Contatos</a></li>
                </span>
            </ul>
        </Container>
    )
}

