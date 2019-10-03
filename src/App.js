import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <div className="main-header-logo">
        <img src={logo} alt="Aircnc" />
        </div>
        <div className="main-header-title">
          <h1>Ganhos potenciais por mês</h1>
          <strong>R$ 2.250</strong>
        </div>
      </header>

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
      </div>

      <form>
        <label htmlFor="email">E-mail*</label>
        <input type="email" id="email" placeholder="Digite seu e-mail"/>
      </form>


    </div>
  );
}

export default App;
