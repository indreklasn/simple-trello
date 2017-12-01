import React from 'react';
import styled from 'styled-components';
import Logo from '~Assets/logo.svg';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 0;
`

const Image = styled.svg`
    background-image: url(${Logo});
    width: 65px;
    height: 65px;
    background-repeat: no-repeat;
    filter: drop-shadow(3px 3px 3px #333);
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(6px 6px 6px #333);
        transition: all 200ms ease-in-out;
        transform: scale(1.10) rotate(-4.5deg);
    }
`

const Header = () => (
    <Link to='/'>
        <HeaderWrapper>
            <Image />
        </HeaderWrapper>
    </Link>
)

export default Header;
