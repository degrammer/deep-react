/* @flow */
import React from "react";

type PropsType = {
  number1: number,
  number2: number
};
class Calculator extends React.Component<PropsType> {
  constructor() {
    super();
  }

  add(): number {
    return this.props.number1 + this.props.number2;
  }

  render() {
    return <div />;
  }
}
