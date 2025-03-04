import { Component } from "react";
import Fbutton from "../components/Fbutton.jsx";
import Ftext from "../components/Ftext.jsx";
import Ftextbox from "../components/Ftextbox.jsx";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "Email",
      password: "Password",
      Email: "",
      Password: "",
    };
  }

  validateEmail = () => {};
  handleLogin = () => {
    // console.log("Login button clicked!");
    alert("Logging in...");
  };

  activeEmail = (e) => {
    console.log("active");
    let value = e.target.value;
    // console.log(value);
    let email = this.state.placeholder;
    if (email == "Email") this.setState({ placeholder: "" });
    else {
      this.setState({ placeholder: "Email" });
    }
  };

  activePassword = () => {
    let pwd = this.state.password;
    if (pwd == "Password") this.setState({ password: "" });
    else this.setState({ password: "Password" });
  };
  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <Ftext
            text="facebook"
            style="logo text-4xl font-bold text-blue-600 mb-4"
          />
          <Ftext
            text="ℹ You must log in to continue."
            style=" inline-block text-gray-600 mb-4 border-solid border-1 pr-100 border-blue-700 text-xs p-2 "
          />
          <form className="bg-white shadow-lg rounded-lg p-6 w-80 ml-30">
            <Ftext
              text="Log in to Facebook"
              style="text-xl font-semibold mb-6"
            />
            <Ftext
              text="You must log in to continue"
              style="text-black-500 text-sm mb-4 border-solid border-1 border-yellow-700 bg-yellow-100 text-xs p-2"
            />

            <Ftextbox
              style="w-full p-2 border border-gray-300 rounded-md mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
              placeholder={this.state.placeholder}
              func={this.activeEmail}
              value={this.state.Email}
            />
            <Ftextbox
              style="w-full p-2 border border-gray-300 rounded-md mb-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
              placeholder={this.state.password}
              func={this.activePassword}
              value={this.state.Password}
            />
            <br />
            <Fbutton
              func={this.handleLogin}
              text="Log in"
              style="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-4 cursor-pointer"
            />

            <div className="flex justify-center text-blue-600 text-[10px]">
              <Ftext text="Forgotten account?" style="cursor-pointer" />
              <Ftext text="Sign up for Facebook" style="cursor-pointer ml-6" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
