import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
    margin: 10px 0;
    padding: 14px 7px;
    background: rgb(241, 241, 241);
    border-radius: 4.5px;
`

const CardTitle = styled.h3`
    font-weight: bold;
    font-size: 19px;
    margin: 0;
`

const Card = ({title}) => (
    <CardWrapper>
        <CardTitle>{title}</CardTitle>
    </CardWrapper>
)

export default Card;
