import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import NewCustomer from './pages/NewCustomer/NewCustomer'
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={NewCustomer} />
      <Route path="/Login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
