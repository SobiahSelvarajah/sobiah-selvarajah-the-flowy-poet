import React from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
    background-color: #0AC5A8;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};  
    top :0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;



    a {
        font-family: 'Dancing Script Regular';
        font-size: 28px;
        color: #FFF;
        line-height: 36px;
        padding: 40px 10px; 
        text-decoration: none;      
    }

    a:hover {
        text-decoration: underline;
    }
`;

const RightNav = ({ open }) => {
    
    return (

        <Ul open={open}>
            <a 
                href='/'
            >
                Welcome Page
            </a>
            <a
                href='/discoverPoetry'
            >
                Discover Poetry
            </a>
            <a
                href='/dictionary'
            >
                Dictionary
            </a>
        </Ul>
    )
}

export default RightNav
