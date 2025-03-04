import { Component } from "react";

class LikeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  like = () => {
    // console.log("Like");
    let a = this.state.counter;
    console.log("a value is" + a);
    a += 1;
    this.setState({ counter: a });
    console.log(a);
  };
  unlike = () => {
    // console.log("unLike");
    let a = this.state.counter;
    a -= 1;
    if (a >= 0) {
      this.setState({ counter: a });
    }
  };
  render() {
    return (
      <div>
        Q5:
        <h1>{this.state.counter}</h1>
        <button id="btn" onClick={this.like}>
          Like
        </button>
        <button id="btn" onClick={this.unlike}>
          Unlike
        </button>
      </div>
    );
  }
}
export default LikeCounter;
