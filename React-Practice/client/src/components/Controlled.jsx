import { Component } from "react";
class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = { t_val: "for name", t1_val: "for password" };
  }

  trap_t1 = (e) => {
    var v1 = e.target.value;
    if (v1.indexOf("@") !== -1) {
      this.setState({ t_val: v1 });
    } else {
      // this.setState({ t_val: v1 });
      alert("Email must contain '@'");
    }
  };
  trap_t2 = (e) => {
    this.setState({ t1_val: e.target.value });
  };

  render() {
    return (
      <div>
        Q: Controlled
        <br></br>
        <input type="text" value={this.state.t_val} onChange={this.trap_t1} />
        <input type="text" value={this.state.t1_val} onChange={this.trap_t2} />
      </div>
    );
  }
}
export default Controlled;
