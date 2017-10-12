import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, withRouter, Route } from 'react-router-dom';

import { Home, About } from './components/CustomComponents';

// import happy puppy element
//import { HappyPuppy, SadPuppy } from './Util';
import {
  Meal,
  Ingredient,
  //EdibleThings
} from './Kitchen';

class App extends Component {

  componentDidMount() {
    // do a bit of stuff to wrap up
    let cassava = new Ingredient('Cassava');
    let water = new Ingredient('Water');

    let garri = new Meal('Garri');
    garri.setColor('yellow');
    garri.setTaste('Bland');
    garri.addIngredient(cassava);
    garri.addIngredient(water);

    console.info('Meal -> %o', garri);

    //let priceOfMeal = 49;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* 
          <HappyPuppy />
          <HappyPuppy />
          <p>That's right! We love:</p>
          <HappyPuppy />
          <p>...That said, the world still has:</p>
          <SadPuppy />
          */}
          <Switch>
            <Route exact path="/" component={() => <Home {...this.props} />} />
            <Route path="/home" component={() => <Home {...this.props} />} />
            <Route path="/about" component={() => <About {...this.props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
