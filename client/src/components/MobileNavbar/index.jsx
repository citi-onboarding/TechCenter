import { Button, Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';

import { Container } from "./styles.js";
import logo from "../../assets/mobileNavbarLogo.svg"

export default function MobileNavbar() {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Container>
            <img src={logo} alt="mobile navbar logo" />
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
            </Dropdown>
        </Container>
    )
}

