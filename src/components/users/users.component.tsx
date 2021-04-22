import * as React from "react";
import { useState } from "react";

const Iusers = (props: any): JSX.Element => {
    const [state, setState] = useState("Search");

    return (
        <button onClick={() => setState("Search")}>{state}</button>
    );
}
  
export default Iusers;