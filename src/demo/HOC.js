import React, { Component } from "react";

const HOC = WrapperComponent =>
  class HOC extends Component {
    state = { toggle: false, data: {} };
    click = () => {
      this.setState({ toggle: !this.state.toggle });
    };

    fetchData = () => {
      fetch("/api", params).then(response => {
        const { data } = data;
        this.setState(data);
      });
    };

    componentDidMount() {
      this.fetchData();
    }

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
