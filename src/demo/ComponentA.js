import React, { Component } from "react";
import Hooks from "./Hooks";

export default class ComponentA extends Component {
  render() {
    const data = Hooks();
    return <div>{data}</div>;
  }
}
