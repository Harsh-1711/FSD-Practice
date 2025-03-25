import { Component } from "react";
class Ftext extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p className={this.props.style}>{this.props.text}</p>
      </>
    );
  }
}

export default Ftext;
