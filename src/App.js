import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">
     <div className="main-header">
     <div className="main-header-container">
     <div className="main-header-logo">
      <img src={logo} alt="Aircnc" />
     </div>
     <div className="main-header-title">
       <h1>Ganhos potenciais por mês</h1>
       <strong>R$ 2.250</strong>
     </div>
     </div>
     </div>
      <div className="contentbody">
      <div className="content">
        <Routes />
      </div>

      </div>
    </div>
  );
}

export default App;
