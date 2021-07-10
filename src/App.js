import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Layouts/Home/Home';
import NotFound from './Layouts/Default/NotFound/NotFound';
import Blog from './Layouts/Blogs/Blog';
import BlogSingle from './Layouts/Blogs/BlogSingle';
import Ecommerce from './Layouts/Ecommerce/Ecommerce';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ecommerce">
          <Ecommerce />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
        <Route path="/blog-single">
          <BlogSingle />
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