import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CreateBoardContainer from './boardCreation/CreateBoardContainer';
import ShowAllBoards from './ShowAllBoards';
import { fadeIn } from '~Utils/Animations';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${fadeIn} 300ms linear;
`
class BoardContainer extends Component {

  renderAllBoards = () => {
    const { boardsCollection } = this.props;
      return boardsCollection.map(board => {
        return (
          <ShowAllBoards
            id={board.id}
            key={board.id}
            title={board.title}
          />
        )
      })
  }

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer />
        {this.renderAllBoards()}
      </Wrapper>
    )
  }
}

function mapStateToProps({ boardsCollection }) {
  return {
    boardsCollection
  }
}

export default connect(mapStateToProps)(BoardContainer);
