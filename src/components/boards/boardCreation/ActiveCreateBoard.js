import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { Wrapper } from './CreateBoard';
import cancelCreatingBoard from './../../../Actions/CancelCreatingBoard';
import closeIcon from '../../../Assets/closeIcon.svg';

const Title = styled.h3`
    color: black
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px rgb(240,240,240);
`

const CloseBoardIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;

    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(1.25) rotate(4.5deg);
    }
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px;
`

const BoardNamingTitle = styled.h5`
    color: black;
    font-weight: 400;
    margin: 20px 19px 0 25px;
`

const BoardNamingInput = styled.input`
    margin: 20px 2rem 5px;
    padding: 11px 15px;
    font-size: 16px;
    border-radius: 3px;
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


class ActiveCreateBoard extends Component {

    handleForm = () => {
        console.log('subbmittet')
    }

    renderForm = (props) => {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleForm)}>
                <Field
                    name="boardTitle"
                    component={BoardNamingInput}
                    type="text"
                />
            </form>
        )
    }


    render() {

        const { cancelCreatingBoard } = this.props
        return (

            <Wrapper>

                <TopWrapper>
                    <Title>Creating a board</Title>
                    <CloseBoardIcon
                        onClick={() => cancelCreatingBoard()}
                        src={require('../../../Assets/closeIcon.svg')}
                    />
                </TopWrapper>

                <BodyWrapper>
                    <BoardNamingTitle>What shall we call the board?</BoardNamingTitle>
                    {this.renderForm()}
                    <ButtonWrapper>
                        <CancelButton onClick={() => cancelCreatingBoard()}>Cancel</CancelButton>
                        <SubmitButton onClick={this.handleForm()}>Create</SubmitButton>
                    </ButtonWrapper>
                </BodyWrapper>

            </Wrapper>

        )
    }
}


function validate(values) {

    let errors = {};

    if (!values.boardTitle) {
        errors.boardTitle =  "Oops! Looks like you forgot the name!"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'boardTitle'
})(connect(null, { cancelCreatingBoard })(ActiveCreateBoard));
