import React, { Component } from "react";
import C_func from "./C_func";
class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.val}</h1>
        <h4 onMouseOver={this.props.change}>Bring your mouse here</h4>
      </>
    );
  }
}
export default C_func(Text);
