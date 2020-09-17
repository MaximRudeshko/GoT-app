import React from 'react';
import GotService from '../../services/GotService';
import Header from '../header/Header'

import './App.css';

function App() {

  const gotService = new GotService();
  
  gotService.getAllCharacters()
  return (
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
