import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Heroheader } from "./Heroheader";
import { Sstartpoint } from "./Sstartpoint";
import { Ppoints } from "./Ppoints";
import { Ggraph } from "./Ggraph";
import { Block } from "./Block";
import { Ggoogle } from "./Ggoogle";
import { Price } from "./Price";
import { Twolast } from "./Twolast";
import { Last } from "./Last";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Heroheader></Heroheader>
      <Sstartpoint></Sstartpoint>
      <Ppoints></Ppoints>
      <Ggraph></Ggraph>
      <Block></Block>
      <Ggoogle></Ggoogle>
      <Price></Price>
      <Twolast></Twolast>
      <Last></Last>
    </>
  );
}

export default App;
