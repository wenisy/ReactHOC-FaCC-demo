import React, { Component } from "react";

export default class FaCC extends Component {
  state = { toggle: false };
  click = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <button onClick={this.click}>Toggle Name</button>
        {this.props.children(toggle)}
      </div>
    );
  }
}
