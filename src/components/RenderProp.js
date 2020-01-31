import React, { Component } from "react";

// RENDER PROPS PATTERN
class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      sth: "AHA"
    };
  }
  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.amount, this.state.sth)}
      </div>
    );
  }
}

const Pound = ({ amount }) => <p>Pound:{amount * 5}</p>;
const Euro = ({ amount }) => <p>Euro: {amount * 3}</p>;

const App = () => (
  // <Amount>
  //   {(amount, sth) => (
  //     <div>
  //       <Pound amount={amount} />
  //       <Euro amount={amount} />
  //       <p>Amount: {amount}</p>
  //       <p>Sth: {sth}</p>
  //     </div>
  //   )}
  // </Amount>
  <Amount>
    {({ amount, sth }) => {
      return <div></div>;
    }}
  </Amount>
);

export default App;
