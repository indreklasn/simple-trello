import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    display: flex;
    justify-content: start;
    margin: 0 0 0 50px;
        padding: 10px 60px;
`

const Title = styled.h1`
    color: #333;
    padding: 10px 60px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const ActiveBoardTitle = ({children}) => (
    <TitleWrapper>
        <Title>{children}</Title>
    </TitleWrapper>
)

export default ActiveBoardTitle;
