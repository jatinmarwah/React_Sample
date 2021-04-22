import * as React from "react";
import { useState } from "react";
import { Iusers } from './users/';
import './App.scss';

/**
 * @author Jatin Marwah
 * The container is our base component which needs to be wrapped around
 * <errorBoundaries> <ReactRouter> and Initial State wizard to set base values
 * @returns base component
 */
function App() {
  return (
    <div className="container">
      <header>Get User Info</header>
      <Iusers />
    </div>
  );
}
export default App;