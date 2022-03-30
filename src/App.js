import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BooksPage />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
