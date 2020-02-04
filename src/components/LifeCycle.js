import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  state = {
    input: null
  };

  handleChange = evt => {
    this.setState({ input: evt.target.value });
  };

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    const { value, input } = this.state;
    return (
      <div>
        <p>parent</p>
        <input type="text" value={value} onChange={this.handleChange}></input>
        <Child hey={input} />
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child render");
    return <p>child</p>;
  }
}

export default LifeCycle;
