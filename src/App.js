import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Layouts/Home/Home';
import NotFound from './Layouts/Default/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;