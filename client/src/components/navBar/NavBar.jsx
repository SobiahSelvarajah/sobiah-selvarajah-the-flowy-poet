
import styled from 'styled-components';

import Burger from '../burger/Burger';




const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #D3D3D3;

    .logo {
        padding: 15px 0;
        position: fixed;
    }

`;

const NavBar = () => {
    return (
        <Nav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </Nav>
    )
}

export default NavBar
