import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CreateBoardContainer from './boardCreation/CreateBoardContainer';
import ShowAllBoards from './ShowAllBoards';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
`

class BoardContainer extends Component {

  renderAllBoards = () => {
    const { boardsCollection } = this.props

    boardsCollection.map(board => {
      return <ShowAllBoards key={board.title} title={board.title} />
    })
  }

  shouldComponentUpdate(nextProps) {
    console.log(this.props.boardsCollection, nextProps.boardsCollection)
    if (this.props.boardsCollection.length !== nextProps.boardsCollection.length) {
      this.renderAllBoards();
      return true;
    }
  }

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer />

        {this.renderAllBoards()}

        <ShowAllBoards title="asd" />

      </Wrapper>
    )
  }
}

function mapStateToProps({boardsCollection}) {
  return {
    boardsCollection
  }
}

export default connect(mapStateToProps)(BoardContainer);
