import React from "react";
import NavBar from "../containers/navbar.js";
import Featured from '../containers/featured.js';
import Tables from "../containers/tables.js";

const App = () => {
    return (
        <div 
        //style={{ 
            //backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/dezctvf-8e6edf9b-89e5-41a0-a971-c6dc6b5e6ac3.jpg/v1/fill/w_1280,h_720,q_75,strp/some_lionsgate_background_i_found_on_safari_by_tomthedeviant2_dezctvf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzc4MTdkNDktYTVhNS00YWU2LTkxMjgtMTYwNDlmNGQxZjE4XC9kZXpjdHZmLThlNmVkZjliLTg5ZTUtNDFhMC1hOTcxLWM2ZGM2YjVlNmFjMy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HVJTuaDr60lFA5YA_yX8FiCB3ugPRHmv2XbrvlZjRAc")` 
          //}}
          >
         <NavBar />
         <Featured />
         <Tables />
        </div>
    )
}

export default App