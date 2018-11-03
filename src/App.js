import React, {Component} from "react";
import "./App.css";
import ComponentA from "./demo/ComponentA";
import ComponentB from "./demo/ComponentB";

class App extends Component {
  render() {
    return (
      <>
        <ComponentA />
        <ComponentB />
      </>
    );
  }
}

export default App;
