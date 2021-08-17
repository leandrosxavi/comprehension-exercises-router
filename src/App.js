import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/strictaccess">Strict Access</Link>
          <Switch>
            
            <Route 
              path="/users/:id"
              render={(props) =>
                <Users {...props} greetingMessage="Good Morning" />
              }
            />
            <Route 
              path="/strictaccess"
              render={(props) =>
                <StrictAccess user={{ username: 'joao', password: '1234' }} />
              }
            />
            <Route path="/about" component={ About } />
            <Route exact path="/" component={ Home } />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
