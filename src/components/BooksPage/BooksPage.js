import React, { Component } from 'react'
import ItemList from '../items-list/ItemsList';
import GotService from '../../services/GotService'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ItemDetails from '../ItemDetails/ItemDetails';


class BooksPage extends Component {
    gotService = new GotService();

    state = {
        selectedBook: null
    }

    onBookSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }


    render(){
        return(
            <div className = 'row pl-3 pr-3 justify-content-between'>
                <ItemList onItemSelected = {this.onBookSelected} 
                          getData = {() => this.gotService.getAllBooks()}
                          title = {<h3>Books:</h3>}
                          renderItem = {(item) => <span>{item.name}</span>}
                />
                <ErrorBoundry>
                    <ItemDetails itemId = {this.state.selectedBook}
                                 getData = {this.gotService.getBook} 
                                 title = { <h3>Please choose a book:</h3>}
                    />
                </ErrorBoundry>
            </div>
        )
    }
}

export default BooksPage