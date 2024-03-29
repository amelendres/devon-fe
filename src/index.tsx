import React from 'react';
import ReactDOM from 'react-dom';
import App from './devotional/infrastructure/ui/App'
import reportWebVitals from './reportWebVitals';

// import './index.css'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App msg="COMPARTIENDO EL PAN"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
