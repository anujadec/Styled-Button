import React from "react";
import { render } from "react-dom";

const StyledBtn = props => (
  <button style={props.style}>{props.children}</button>
);

const App = () => (
  <div>
    <StyledBtn>Click Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn style={{ background: "red" }}>Not Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn>Or Me!</StyledBtn>
  </div>
);

render(<App />, document.getElementById("root"));
