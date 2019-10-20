import React from 'react';
import logo from './logo.svg';
import DemoPage from './modules/DemoPage'
import AlertManager from './modules/alerts/AlertsManager'
import './App.css';

function App() {
  return (
    <div className="App">
      <DemoPage/>
      <AlertManager/>
    </div>
  );
}

export default App;
