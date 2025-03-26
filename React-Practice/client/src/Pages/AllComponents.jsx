import React from "react";
import { Button } from "../components/home.jsx";
import Button2 from "../components/home.jsx";
import Btn from "../components/btn.jsx";
import Practice1 from "../components/Practice1.jsx";
import Stateful from "../components/Stateful.jsx";
import LikeCounter from "../components/LikeCounter.jsx";
import Color from "../components/Color.jsx";
import Click from "../components/Click.jsx";
import Text from "../components/Text.jsx";
import Login from "../Pages/Login.jsx";
import Controlled from "../components/Controlled.jsx";

const AllComponents = () => {
  return (
    <div>
      <h1>All Components</h1>
      <Button text="Harsh" />
      <Button2 text="Hello" />
      <Btn styles="btn1" text="Hi" />
      <Btn styles="btn" text="Hello buddy" />
      <Practice1 stream="MCA" location="Delhi" />
      <Stateful />
      <LikeCounter />
      <Color />
      <Click />
      <Text />
      <Controlled />
    </div>
  );
};

export default AllComponents;
