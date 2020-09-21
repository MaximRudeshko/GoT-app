import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import CharatersPage from '../charactersPage/CharactersPage';
import BooksPage from '../BooksPage/BooksPage'
import HousesPage from '../Housespage/HousesPage';
import { GotServiceProvider } from '../service-context/GotServiceContext';
import GotService from '../../services/GotService';


class App extends Component {

  gotService = new GotService();

  render(){  
    return (
      <GotServiceProvider value = {this.gotService}>
        <ErrorBoundry>
          <BrowserRouter>
            <div className="container">
              <Header/>
              
              <Switch>
                <Route path = '/' component = {RandomCharacter} exact/>
                <Route path = '/characters' component={CharatersPage}/>
                <Route path = '/houses' component={HousesPage}/>                
                <Route path = '/books' component={BooksPage}/>                
              </Switch>
            </div>
          </BrowserRouter>
        </ErrorBoundry>
      </GotServiceProvider>
    );
  } 
}

export default App;
