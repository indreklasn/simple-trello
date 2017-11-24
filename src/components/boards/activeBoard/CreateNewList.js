import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin: 0 20px;
    background-color: rgb(255, 255, 255);
    padding: 15px 75px;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
        transition: all 150ms ease-in-out;
        box-shadow: 0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23);

    }
`

const Text = styled.h4`
    color: #333;
`

const CreateNewList = () => (
    <Wrapper>
        <Text>Add a list...</Text>
    </Wrapper>
)

export default CreateNewList;
