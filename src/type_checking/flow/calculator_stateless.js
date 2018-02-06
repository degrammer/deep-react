/* @flow */
import React from "react";
import type { Node } from "react";
type PropsType = {
  number1: number,
  number2: number
};
// For more info about React types https://flow.org/en/docs/react/types/

function Calculator(props: PropsType): Node {
  return <div>{props.number1 + props.number2}</div>;
}
