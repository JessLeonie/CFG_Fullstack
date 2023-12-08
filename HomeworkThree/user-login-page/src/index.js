import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './WelcomePage';
import ErrorPage from './ReturnPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'index element={<App />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
