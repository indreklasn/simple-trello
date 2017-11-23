import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardContainer from './boards/BoardContainer';
import ShowActiveBoard from './boards/activeBoard/ShowActiveBoard';
import NotFound from './NotFound';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
