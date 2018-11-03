import React, { Component } from "react";
import FaCC from "./FaCC";

export default class ComponentA extends Component {
  render() {
    return <FaCC>{toggle => toggle && <div>ComponentA</div>}</FaCC>;
  }
}
