import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 0 20px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
    cursor: pointer;
    height: 60px;
    padding: 0 40px;

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

const CreateNewList = ({ addList }) => (
    <Wrapper onClick={addList}>
        <Text>Add a list...</Text>
    </Wrapper>
)

export default CreateNewList;
