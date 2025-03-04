import { Component } from "react";

class Stateful extends Component {
  constructor() {
    super();
    // console.log("Hello");
    this.state = { text: "Harsh" };
  }
  b_change = () => {
    if (this.state.text === "Harsh") {
      this.setState({ text: "Hi" });
    } else if (this.state.text === "Hi") {
      this.setState({ text: "Harsh" });
    }
  };
  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        Q4:
        <h1>hello</h1>
        <button id="btn" onClick={this.b_change}>
          Click me
          {this.state.text}
        </button>
      </div>
    );
  }
}
export default Stateful;
