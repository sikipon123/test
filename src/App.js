import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import UsersList from "./components/UsersList";
import Comments from "./components/Comments";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UsersList} />

          <Route
            exact
            path="/posts/:id"
            render={props => <Posts {...props} />}
          />

          <Route 
          exact 
          path="/comments/:id" 
          render={ props => <Comments {...props}/>}
          />

        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
