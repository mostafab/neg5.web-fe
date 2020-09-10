import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return (
    <p>
      Clicked: {props.counter} times
      {' '}
      <button onClick={props.increment}>+</button>
      {' '}
      <button onClick={props.decrement}>-</button>
      {' '}
      <button onClick={props.incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={() => props.incrementAsync()}>Increment async</button>
    </p>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;