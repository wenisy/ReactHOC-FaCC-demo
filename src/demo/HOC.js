import React, { Component } from "react";

const HOC = WrapperComponent =>
  class HOC extends Component {
    state = { toggle: false };
    click = () => {
      this.setState({ toggle: !this.state.toggle });
    };

    render() {
      const { toggle } = this.state;
      return (
        <div className="App">
          <button onClick={this.click}>Toggle Name</button>
          {toggle && <WrapperComponent />}
        </div>
      );
    }
  };

export default HOC;
