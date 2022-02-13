import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
