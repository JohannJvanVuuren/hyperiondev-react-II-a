/* Importing React and ReactDOM to use JSX and to make available DOM specific methods. */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Importing the main style sheet. */
import './css/main.min.css';
/* Import of the App component that is rendered here into the root element. */
import App from './App';
/* Import of default tool for measuring the metrics that capture user experience of the page. */
import reportWebVitals from './reportWebVitals';

/* Creating the root element constant which is used together with the render() method to render the App component into the root element. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
