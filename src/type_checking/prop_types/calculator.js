import React from "react";
import PropTypes from "prop-types";

class Calculator extends React.Component {
  /*In order to use this way you need to install babel-eslint and add "parser": "babel-eslint"
  //to your .eslintrc file, ES6 doesn't support this yet.
  static propTypes = {
    number_1: PropTypes.number.isRequired,
    number_2: PropTypes.number.isRequired
  }*/

  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add() {
    return this.props.number1 + this.props.number2;
  }

  render() {
    return <div />;
  }
}

// Current supported way for static class properties.
// For performance reasons, propTypes is only checked in development mode.
// This only shows warnings in the javascript console.
Calculator.propTypes = {
  number1: PropTypes.number.isRequired,
  number2: PropTypes.number.isRequired
};
