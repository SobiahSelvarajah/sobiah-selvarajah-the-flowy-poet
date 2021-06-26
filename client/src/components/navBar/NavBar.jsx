
import styled from 'styled-components';

import Burger from '../burger/Burger';

import blackLogo from '../../assets/images/logo-files/resizable_vector_files/Black.svg'




const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #D3D3D3;
    background-color: #0AC5A8;
    position: fixed;
    padding: 10px;

`;

const NavBar = () => {
    return (
        <Nav>
            <img 
                className="logo" 
                src={blackLogo}
                alt="monochrome logo"
            >
            </img>
            <Burger />
        </Nav>
    )
}

export default NavBar
