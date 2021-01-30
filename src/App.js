import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const CookiesPage = () => (
  <div>
    <h1>COOKIES PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/cookies' component={CookiesPage} />
      </Switch>
    </div>
  );
}

export default App;
