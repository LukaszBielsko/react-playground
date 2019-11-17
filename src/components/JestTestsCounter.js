import React, { Component } from 'react';

class JestTestsCounter extends Component {

    state = {
        counter: 0
    }

    inc = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }

    dec = () => {
        this.setState( prevState => {
            return { counter: prevState.counter - 1}
        } )
    }  
    ()

    render() {
        return (
            <div
                className="m-5 p-5"
                data-test="jestCounter">
                <button
                    data-test="inc-button"
                    className='btn' onClick={this.inc}>
                    Increment
                    </button>
                <button
                    data-test="dec-button"
                    className='btn' onClick={this.dec}>
                    Decrement
                    </button>
                <p>
                    Counter: <span data-test="display-counter">{this.state.counter}</span>
                </p>
            </div>
        );

    }
};

export default JestTestsCounter;