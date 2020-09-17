import React, { Component } from 'react';
import Header from '../header/Header'
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemList from '../items-list/ItemsList';
import RandomCharacter from '../randomCharacter/RandomCharacter';
import GotService from '../../services/GotService'

import './App.css';

class App extends Component {

  

  state = {
    selectedChar: null,
  }


  onCharacterSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render(){  
    return (
      <React.Fragment>
        <div className="container">
          <Header/>
          <RandomCharacter />
          <div className = 'row pl-3 pr-3 justify-content-between'>
            <ItemList onCharacterSelected = {this.onCharacterSelected} />
            <ItemDetails charId = {this.state.selectedChar}/>
          </div>
        </div>
      </React.Fragment>

    );
  } 
}

export default App;
