import React from "react";
import NavBar from "../containers/navbar.js";
import Featured from '../containers/featured.js';
import Tables from "../containers/tables.js";
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
          <h1>
              Welcome to Lionsgate Films Homie!
          </h1>
         <NavBar />
         <Featured />
         <Tables />
        </div>
    )
}

export default App