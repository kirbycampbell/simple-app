import React, { Component } from "react";
import aws_exports from "./aws-exports";
import NavBarPage from "./NavBar";
import { withAuthenticator } from "aws-amplify-react";
import "./App.css";
import Amplify from "aws-amplify";
import TodoList from "./Todos/TodoList";
import { Route } from "react-router-dom";
import Home from "./Home";
import Audio from "./Audio";
import PersonForm from "./Person/PersonForm";
import IndividualPerson from "./Person/IndividualPerson";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    let styles = {
      border: "10px solid black "
    };
    return (
      <div className="App">
        <div style={styles}>
          <NavBarPage />
          <Route exact path="/" component={Home} />
          <Route exact path="/TodoList" component={TodoList} />
          <Route exact path="/Audio" component={Audio} />
          <Route exact path="/Person" component={PersonForm} />
          <Route exact path={"/Person/:id"} component={IndividualPerson} />
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
