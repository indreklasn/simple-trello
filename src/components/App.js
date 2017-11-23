import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardContainer from './boards/BoardContainer';
import ShowActiveBoard from './boards/ShowActiveBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route path="/b/:id" component={ShowActiveBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
