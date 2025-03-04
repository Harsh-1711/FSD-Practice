import { Component } from "react";

class Fbutton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { func, style, text } = this.props;
    return (
      <>
        <button onClick={func} className={style}>
          {text}
        </button>
      </>
    );
  }
}

export default Fbutton;
