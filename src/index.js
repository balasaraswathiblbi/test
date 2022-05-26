import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Akash from './components/App';
import reportWebVitals from './reportWebVitals';
import StateVariables from "./components/stateVariables";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateVariables />
  </React.StrictMode>
);

reportWebVitals();