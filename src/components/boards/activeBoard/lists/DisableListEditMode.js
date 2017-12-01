import React from 'react';
import styled from 'styled-components';
import CloseIcon from '~Assets/closeIcon.svg';

const DisableWrapper = styled.div`
    position: relative;
    left: 30px;
    top: -24px;
    z-index: 9999;
`

const DisableButton = styled.svg`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(1.25) rotate(4.5deg);
    }
`

const DisableListEditMode = ({ disableList }) => (
    <DisableWrapper onClick={disableList}>
        <DisableButton />
    </DisableWrapper>
);

export default DisableListEditMode;
