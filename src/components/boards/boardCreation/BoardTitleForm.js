import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';


const CancelButton = styled.button`
    width: auto;
    height: 43px;
    margin: 15px -5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: none;
        color: black;
    }
`
const BoardNamingInput = styled.input`
    margin: 20px 2rem 5px;
    padding: 11px 15px;
    font-size: 16px;
    border-radius: 5px;
    border: 2.5px solid #4481eb;
    width: 75%;
`

const ButtonWrapper = styled.div`
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`


const SubmitButton = styled.button`
    width: 114px;
    height: 43px;
    margin: 15px 18px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: #4481eb;
        color: white;
    }
`


let BoardTitleForm = (props) => {

    const { handleSubmit, cancelAction } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="boardTitle"
                component="input"
                type="text"
            />
            <ButtonWrapper>
                <CancelButton onClick={() => cancelAction()}>Cancel</CancelButton>
                <SubmitButton type="button">Create</SubmitButton>
            </ButtonWrapper>
        </form>
    )
}

BoardTitleForm = reduxForm({
    form: 'boardTitle'
})(BoardTitleForm)

export default BoardTitleForm;
