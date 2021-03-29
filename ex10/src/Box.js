import React, { Component } from "react";

export class Box extends Component {
  render() {
    return <h2>This is a {this.props.size}px Box!</h2>;
  }
}

export default Box;


