import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Container } from "./styles.js";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ham from "../../assets/hamburguer.svg"
import logo from "../../assets/mobileNavbarLogo.svg"

export default function MobileNavbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        const anchor = document.getElementById("anchor")
        setAnchorEl(anchor);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Container>
            <img src={logo} alt="mobile navbar logo" />

            <div>
                <span id="anchor" />
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <img src={ham} alt="" />
                </Button>


                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className="hamModal"
                >


                    <MenuItem><a href="#ABOUTUS">Sobre</a></MenuItem>
                    <MenuItem><a href="!#">Eventos</a></MenuItem>
                    <MenuItem><a href="!#">Parceiros</a></MenuItem>
                    <MenuItem><a href="!#">Conteúdos</a></MenuItem>
                    <MenuItem><a href="!#">Contatos</a></MenuItem>

                </Menu>
            </div>
        </Container>
    )
}

