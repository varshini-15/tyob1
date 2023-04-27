import React, { Component } from "react";
import Component2 from "./Component2";

export default class ParentComponents extends Component {
  // Mounting
  constructor() {
    super();
    this.state = {
      myName: "My Data",
      show: false,
    };
    console.log("Constructor executed");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps executed");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount executed"); //only once when mounted to DOM
  }

  //updating
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "position";
  }

  componentDidUpdate(pevProp, preState, snapShot) {
    console.log("componentDidUpdate");
    console.log(pevProp);
    console.log(preState);
    console.log(snapShot);
  }
  updateState(data) {
    this.setState({ myName: data, show: true });
  }
  render() {
    //'this' is important
    return (
      <div>
        ParentComponents
        <button
          onClick={() => {
            this.updateState("updating phase");
          }}
        >
          click
        </button>
        {this.state.show == 3 ? <Component2 /> : " "}
      </div>
    );
  }
}
