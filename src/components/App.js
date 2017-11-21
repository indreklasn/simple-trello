import React, { Component } from 'react';
import BoardContainer from './boards/BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}

export default App;
