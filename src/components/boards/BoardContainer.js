import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CreateBoardContainer from './boardCreation/CreateBoardContainer';


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);  padding: 60px 35px;
`


class BoardContainer extends Component {

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer />
      </Wrapper>
    )
  }
}


export default connect(null)(BoardContainer);
