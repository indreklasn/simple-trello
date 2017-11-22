import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Wrapper } from './CreateBoard';
import cancelCreatingBoard from './../../../Actions/CancelCreatingBoard';
import submitNewBoard from './../../../Actions/SubmitNewBoard';
import BoardTitleForm from './BoardTitleForm';

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
    margin: 20px 19px 0 33px;
`


class ActiveCreateBoard extends Component {


    onSubmit = (values) => {
        console.log("handling form", values)
    }

    render() {

        const {
            cancelCreatingBoard,
        } = this.props;

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
                    <BoardTitleForm
                        onSubmit={this.onSubmit}
                        cancelAction={cancelCreatingBoard}
                    />
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

export default connect(null, { cancelCreatingBoard, submitNewBoard })(ActiveCreateBoard);
