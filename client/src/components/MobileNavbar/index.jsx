import React, { useState } from 'react'

import { Container } from "./styles.js";
import logo from "../../assets/mobileNavbarLogo.svg"

export default function MobileNavbar() {

    return (
        <Container>
            <img src={logo} alt="mobile navbar logo" />
        </Container>
    )
}

