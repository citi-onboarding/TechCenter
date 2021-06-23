import 'antd/dist/antd.css';

import { Dropdown, Menu } from 'antd';

import { Container } from "./styles"
import hamburger from "../../assets/Hamburguer.svg"
import logo from "../../assets/MobileNavbarLogo.svg"

export default function MobileNavbar() {
    const menu = (
        <Menu>
            <Menu.Item key="0"><a href="!#">Sobre</a> </Menu.Item>
            <Menu.Item key="1"><a href="!#">Eventos</a> </Menu.Item>
            <Menu.Item key="3"><a href="!#">Parceiros</a> </Menu.Item>
            <Menu.Item key="4"><a href="!#">Conteúdos</a> </Menu.Item>
            <Menu.Item key="5"><a href="!#">Contatos</a> </Menu.Item>
        </Menu>
    )
    return (
        <Container>
            <img src={logo} alt="Navbar Logo" />
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" className="menuBtn">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img src={hamburger} alt="hamburguer" className="dropDown" />
                </a>
            </Dropdown>
        </Container>
    )
}





