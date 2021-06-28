import React from "react";
import { render } from "react-dom";
import "./style.css";

import { Button } from "componentry";
import { Button as V2Button } from "componentry-v2";

function App() {
  return (
    <div>
      <Button>V3 Button</Button>
      <V2Button>V2 Button</V2Button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
