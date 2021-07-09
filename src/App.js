import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Layouts/Home/Home';
import NotFound from './Layouts/Default/NotFound/NotFound';
import Blog from './Layouts/Blogs/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blogs">
          <Blog />
        </Route>
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