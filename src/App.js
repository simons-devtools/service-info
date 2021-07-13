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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <p>{loggedInUser.email}</p>s */}
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/ecommerce">
            <Ecommerce />
          </PrivateRoute>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/blog-single">
            <BlogSingle />
          </Route>
          <Route path="/login">
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