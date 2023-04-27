import React, { Component } from "react";

export default class Component2 extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return <div>Component2</div>;
  }
}
