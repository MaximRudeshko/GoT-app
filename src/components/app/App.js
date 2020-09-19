import React, { Component } from 'react';
import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';
import './App.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import CharatersPage from '../charactersPage/CharactersPage';
import BooksPage from '../BooksPage/BooksPage'
import HousesPage from '../Housespage/HousesPage';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

class App extends Component {



  render(){  
    return (


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

    );
  } 
}

export default App;
