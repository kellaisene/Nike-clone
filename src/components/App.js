import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <main>
      <Header/>
        {/* <Switch>
          <Route exact path="/" />
          <Route  path="/men" />
          <Route  path="/women" />
          <Route  path="/boys" />
          <Route  path="/girls" />
          <Route  path="/customize" />
        </Switch> */}
      <Footer/>
      </main>
    );
  }
}

export default App;
