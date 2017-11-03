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
       <img src="https://images4.alphacoders.com/632/thumb-1920-632661.jpg" 
            height="900px" width="100%" 
            alt="Nike Swoosh"/>
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
