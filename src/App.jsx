import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './views/main/MainPage';
import LoginPage from './views/login/LoginPage';

function App() {
  console.log(true);
  return (
    <Router>
      <Switch>
        <Route path="/"><MainPage /></Route>
        <Route path="/login"><LoginPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
