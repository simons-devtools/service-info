import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Layouts/Home/Home';
import NotFound from './Layouts/Default/NotFound/NotFound';
import Blog from './Layouts/Blogs/Blog';
import BlogSingle from './Layouts/Blogs/BlogSingle';
import Ecommerce from './Layouts/Ecommerce/Ecommerce';
import Dashboard from './Layouts/Dashboard/Dashboard';
import PrivateRoute from './Layouts/Login/PrivateRoute';
import Login from './Layouts/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import BlogTopics from './Layouts/Blogs/BlogTopics';
import About from './Layouts/Pages/About/About';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bloggers/:blogTopics">
            <BlogTopics />
          </Route>
          <Route path="/blog-single/:blogId">
            <BlogSingle />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <PrivateRoute path="/ecommerce">
            <Ecommerce />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/account/login">
            <Login />
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
    </UserContext.Provider>
  );
}

export default App;