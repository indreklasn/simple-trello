import React from 'react';
import styled from 'styled-components';
import CreateCardContainer from './CreateCardContainer';

export const ListItemsWrapper = styled.div`
    display: flex;
`

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    background-color: rgb(255, 255, 255);
    padding: 5px 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
`

const ListItemHeader = styled.h4`
    color: #333;
    letter-spacing: 1.66px;
    text-transform: uppercase;
    font-weight: 900;
`


const ListItem = ({name}) => (
    <ListItemWrapper>
        <ListItemHeader>{name}</ListItemHeader>
        <hr />
        <CreateCardContainer />
    </ListItemWrapper>
)

export default ListItem;
