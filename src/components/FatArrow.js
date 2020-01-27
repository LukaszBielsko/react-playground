import React, {Component} from 'react';

class FatArrow extends React.Component {

  constructor() {
    super();
    this.name = 'MyComponent';

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this); // this points to the function handleClick1, so undefined
  }

  handleClick3 = () => alert(this.name);

  alertThisFatArrow = () => {
    console.log('fat arrow',this)
  }

  alertThisNormalFunction() {
    console.log('normal function',this)
  }

  render() {

    console.log(this)

    return (
      <div>
        <button className="block" onClick={this.handleClick1()}>click instant</button>
        <button className="block" onClick={this.handleClick1}>click 1</button>
        <button className="block" onClick={this.handleClick2}>click 2</button>
        <button className="block" onClick={this.handleClick3}>click 3</button>
        <button className="block" onClick={this.alertThisFatArrow}> fat arrow 'this'</button>
        <button className="block" onClick={this.alertThisNormalFunction}> normal  function  'this'</button>
      </div>
    );
  }
}

export default FatArrow ;