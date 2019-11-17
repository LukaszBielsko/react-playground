import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import JestTestsCounter from './JestTestsCounter';


Enzyme.configure({ adapter: new EnzymeAdapter() })

const findByTestAttr = (wrapper, selector) => wrapper.find(`[data-test='${selector}']`)

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<JestTestsCounter {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

test('renders without crashing', () => {
    const wrapper = setup()
    const comp = findByTestAttr(wrapper, 'jestCounter')
    expect(comp.length).toBe(1)
});

test('renders inc button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'inc-button')
    expect(button.length).toBe(1)
});

test('renders counter display', () => {
    const wrapper = setup()
    const display = findByTestAttr(wrapper, 'display-counter')
    expect(display.length).toBe(1)
});

test('counter starts at 0', () => {
    const wrapper = setup()
    const stateCounter = wrapper.state('counter')
    expect(stateCounter).toBe(0)
});

test('clicking button increments counter', () => {
    const wrapper = setup()
    wrapper.setState({ counter: 4 })
    const button = findByTestAttr(wrapper, 'inc-button')
    button.simulate('click')
    const state = wrapper.state('counter')
    expect(state).toBe(5)
});

test('clicking button increment counter display ', () => {
    const wrapper = setup(null, {counter: 6})
    const button = findByTestAttr(wrapper, 'inc-button')
    button.simulate('click')
    const display = findByTestAttr(wrapper, 'display-counter')
    expect(display.text()).toContain(7)
});

test('renders decrement button', () => {
    const wrapper = setup()
    const decBtn = findByTestAttr(wrapper, 'dec-button')
    expect(decBtn.length).toBe(1)
});

test('clicking decrement button decrements counter', () => {
    const wrapper = setup()
    const decBtn = findByTestAttr(wrapper, 'dec-button')
    decBtn.simulate('click')
    const state = wrapper.state('counter')
    expect(state).toBe(-1)
});

test('clicking decrement button decrements counter display', () => {
    const wrapper = setup(null, {counter: 8})
    const decBtn = findByTestAttr(wrapper, 'dec-button')
    decBtn.simulate('click')
    const display = findByTestAttr(wrapper, 'display-counter')
    expect(display.text()).toContain(7)
});