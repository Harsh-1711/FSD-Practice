import { Component } from "react";

class Ftextbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <input
          type="text"
          className={this.props.style}
          placeholder={this.props.placeholder}
          onChange={this.props.func}
        />
      </>
    );
  }
}

export default Ftextbox;
