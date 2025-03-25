import React, { Component } from "react";

const Counting = (OriginalComponent) => {
  return class C_func extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    increment = () => {
      console.log("click");
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <>
          <OriginalComponent val={this.state.count} change={this.increment} />
        </>
      );
    }
  };
};
export default Counting;
