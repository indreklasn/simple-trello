import React from 'react';
import styled from 'styled-components';

export const ListItemsWrapper = styled.div`
    display: flex;
`

const ListItemWrapper = styled.div`
    display: flex;
    margin: 0 20px;
    background-color: rgb(255, 255, 255);
    padding: 5px 75px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
`

const ListItemHeader = styled.h4`
    color: #333;
`


const ListItem = ({name}) => (
    <ListItemWrapper>
        <ListItemHeader>{name}</ListItemHeader>
    </ListItemWrapper>
)

export default ListItem;
