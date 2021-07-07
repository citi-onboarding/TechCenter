import { Container } from "./styles.js";
import React from 'react'
import logo from "../../assets/small-logo-navbar.png"

export default function Navbar() {

    return (
        <Container>
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

