import * as React from "react";
import { useState } from "react";

const Iusers = (props: any): JSX.Element => {
    const [state, setState] = useState("Search");

    return (
        <div>
            <input type='text'></input>
            <button onClick={() => setState("Search")}>{state}</button>
        </div>
    );
}
  
export default Iusers;