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
            <a href="#FIRST">
                <img src={logo} alt="mobile navbar logo" />
            </a>

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
                    <a onClick={() => handleClose()} href="#ABOUTUS">
                        <MenuItem color="black" >Sobre</MenuItem>
                    </a>
                    <a onClick={() => handleClose()} href="#EVENTOS">
                        <MenuItem>Eventos</MenuItem>
                    </a>
                    <a onClick={() => handleClose()} href="#PARCEIROS">
                        <MenuItem>Parceiros</MenuItem>
                    </a>
                    <a onClick={() => handleClose()} href="#CONTENT">
                        <MenuItem>Conteúdos</MenuItem>
                    </a>
                    <a onClick={() => handleClose()} href="#CONTACT">
                        <MenuItem>Contatos</MenuItem>
                    </a>

                </Menu>
            </div>
        </Container >
    )
}

