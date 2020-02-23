import React, { Component } from "react";
import "./styles.css";
import { Route, Link, withRouter } from "react-router-dom";
import RouteComponentA from "./component/RouteComponentA";
import RouteComponentB from "./component/RouteComponentB";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "";
  }
  getQueryValue = value => {
    this.name = value;
  };

  redirectToB = () => {
    this.props.history.push(`/compB/${this.name}`);
  };

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/compA">compA </Link>
          </li>
          <li>
            <Link to={{}} onClick={this.redirectToB}>
              compB
            </Link>
          </li>
        </ul>

        <Route
          path="/compA"
          exact
          component={() => <RouteComponentA handler={this.getQueryValue} />}
        />

        <Route path="/compB/:qry" component={RouteComponentB} />
      </div>
    );
  }
}

export default withRouter(App);
