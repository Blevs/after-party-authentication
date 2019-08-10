import React from 'react';
import './App.css';
import SignUp  from './component/SignUp.js';
import Recipes from './component/Recipes.js';
import { Route, Redirect } from 'react-router-dom';

const protectComponent = (Component, props={}) => {
  if (localStorage.getItem('token')) {
    return <div>
             <button onClick={() => localStorage.removeItem('token')}>Logout</button>
             <Component {...props}/>
           </div>;
  } else {
    return (
      <Redirect to="/" />
    );
  }
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route path="/recipes"
             render={() => protectComponent(Recipes, {someValue: 1})} />
    </div>
  );
}

export default App;
