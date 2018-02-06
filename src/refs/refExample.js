import React from "react";

/**
 * In the typical React dataflow, props are the only way that parent components
 * interact with their children. To modify a child, you re-render it with new props.
 * However, there are a few cases where you need to imperatively modify a child outside
 * of the typical dataflow. The child to be modified could be an instance of a React component,
 * or it could be a DOM element. For both of these cases, React provides an escape hatch.
 *
 *
 * refs only works on class components. Not functional components (they don't have instances)
 * is valid in functional components if you're referencing a DOM element or a class component.
 */
export default class RefExample extends React.Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
    this.setReference = this.setReference.bind(this);
  }

  componentDidMount() {
    this.focus();
  }

  setReference(input) {
    this.textInput = input;
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <p>This is a focused input using ref </p>
        <input type="text" ref={this.setReference} />
      </div>
    );
  }
}
