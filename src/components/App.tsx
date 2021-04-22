import * as React from "react";
import { useState } from "react";
import { Iusers } from './users/';

function App() {
  const [state, setState] = useState("CLICK ME");

  return (
  <div className="container">
    <Iusers />
  </div>
  );
}
export default App;