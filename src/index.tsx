import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./index.css";
import App from "./App";
import ContactForm from "./components/ContactForm";
import reportWebVitals from "./reportWebVitals";
import SectionContext from "./context/sectionStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SectionContext>
    <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/contactUs" element={<ContactForm/>}/>
        </Routes>
    </Router>
    </SectionContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
