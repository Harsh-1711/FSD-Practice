import React, { Component } from "react";
import C_func from "./C_func";
class Click extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.val}</h1>
        <button
          onClick={this.props.change}
          className="border-solid border-1 bg-gray-300"
        >
          Click Here
        </button>
      </>
    );
  }
}
export default C_func(Click);
