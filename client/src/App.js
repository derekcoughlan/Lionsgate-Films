import React from "react";
import Featured from '../containers/featured.js';
import Tables from "../containers/tables.js";

const App = () => {
    return (
        <div>
          <h1>
              Welcome to Lionsgate Films Homie!
          </h1>
         <Featured />
         <Tables />
        </div>
    )
}

export default App