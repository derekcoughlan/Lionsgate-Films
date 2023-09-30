import React from "react";
import NavBar from "../components/navbar.js";
import Featured from '../components/featured.js';
import Tables from "../components/tables.js";

const Home = () => {
    return (
        <div>
         <NavBar />
         <Featured />
         <Tables />
        </div>
    )
}

export default Home