import { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = { color: "black", activeButton: null };
  }

  changeColor = (newColor, buttonId) => {
    this.setState((prevState) => ({
      color: prevState.activeButton === buttonId ? "black" : newColor,
      activeButton: prevState.activeButton === buttonId ? null : buttonId,
    }));
  };

  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        Q6:<h3 style={{ color: this.state.color }}>This is my color</h3>
        <button
          className={this.state.activeButton === "red" ? "gray" : "white"}
          onClick={() => this.changeColor("red", "red")}
        >
          Red
        </button>
        <button
          className={this.state.activeButton === "green" ? "gray" : "white"}
          onClick={() => this.changeColor("green", "green")}
        >
          Green
        </button>
        <button
          className={this.state.activeButton === "blue" ? "gray" : "white"}
          onClick={() => this.changeColor("blue", "blue")}
        >
          Blue
        </button>
      </div>
    );
  }
}

export default Color;
