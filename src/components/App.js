import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Boys from './Boys';
import Girls from './Girls';
import Customize from './Customize';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <main>
      <Header/>
       {/* <img src="https://images4.alphacoders.com/632/thumb-1920-632661.jpg" 
            height="900px" width="100%" 
            alt="Nike Swoosh"/> */}
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  path="/men" component={Men}/>
          <Route  path="/women" component={Women}/>
          <Route  path="/boys" component={Boys}/>
          <Route  path="/girls" component={Girls}/>
          <Route  path="/customize" component={Customize}/>
        </Switch>
      <Footer/>
      </main>
      </HashRouter>
    );
  }
}

export default App;
