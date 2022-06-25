import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SectionContext from "./context/sectionStore";

// import { useState } from "react"; //saber added
//import SabersMainLab from "./sabersMainLab/SabersMainLab"
import Appp from "./sabersMainLab/Appp"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const [learning, setLearning] = useState(true);
const learning = true;

root.render(
  <div>
    {learning ? (
    <React.StrictMode>
      <SectionContext>
        <App />
      </SectionContext>
    </React.StrictMode>)
    :
      (<Appp />) }      
  </div>
);


{/*}  <div>
{learning ? ( 
    <React.StrictMode>
      <SectionContext>
        <App />
      </SectionContext>
    </React.StrictMode>       )
    :
    (<Appp />)
    }
  

  </div> */}


  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
