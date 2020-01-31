import React, { Component } from "react";

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Lucas" };
  }
  addSSS = () => {
    this.setState({ name: this.state.name + "SSS" });
  };
  render() {
    return (
      <div>
        <p>halo </p>
        <button onClick={this.addSSS}> add SSS </button>
        {this.props.children(this.state.name)}
      </div>
    );
  }
}

const Bye = ({ name }) => <p> Bye , {name} </p>;
const Hi = ({ name }) => <p> Hi , {name} </p>;

class RenderProps2 extends Component {
  render() {
    // return null;
    return (
      <DataProvider>
        {data => {
          return (
            <div>
              <Bye name={data} />
              <Hi name={data} />
            </div>
          );
        }}
      </DataProvider>
    );
  }
}

export default RenderProps2;

/* 
  what is render prop?
    it is a react composition pattern 

  what it is used for?



  things I remember
    passing component to a prop called render
    can be called whatever
    passing data to props.children(data)

<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
*/
