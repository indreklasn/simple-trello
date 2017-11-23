import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardContainer from './boards/BoardContainer';
import ShowActiveBoard from './boards/ShowActiveBoard';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route path="/b/:id" component={ShowActiveBoard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
