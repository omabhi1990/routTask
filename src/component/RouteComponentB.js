import React, { Component } from "react";

class RouteComponentB extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let { params } = this.props.match;
    console.log("props ", this.props);
    return <h1>Route Component B Parmas Value : {params.qry}</h1>;
  }
}

export default RouteComponentB;
