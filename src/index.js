import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { RouterProvider } from "react-router-dom";
import { router } from "./Navigation";
import Context from "./Store/contextStore";
import { useState } from "react";
const RunFuncion = () => {
  const [store, setStore] = useState({});
  return (
    <Context.Provider value={{ store, setStore }}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Context.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<RunFuncion />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
