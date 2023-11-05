import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalReset } from "./styles/global.js";
import { GlobalRoot } from "./styles/globalRoot.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset/>
    <GlobalRoot/>
    <App />
  </React.StrictMode>,
)
