import React from "react";
import NavBar from "../containers/navbar.js";
import Featured from '../containers/featured.js';
import Tables from "../containers/tables.js";

const App = () => {
    return (
        <div 
          >
         <NavBar />
         <Featured />
         <Tables />
        </div>
    )
}

export default App