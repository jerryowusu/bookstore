import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Form from './components/Form';
import Categories from './pages/Categories';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Books />
            <Form />
          </div>
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
