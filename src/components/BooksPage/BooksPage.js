import React, { Component } from 'react'
import ItemList from '../items-list/ItemsList';
import GotService from '../../services/GotService'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import Row from '../row/Row';


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

        const booksList = (
            <ItemList onItemSelected = {this.onBookSelected} 
                getData = {() => this.gotService.getAllBooks()}
                title = {<h3>Books:</h3>}
                renderName = {(item) => <span>{item.name}</span>}
            />
        )

        const bookDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedBook}
                    getData = {this.gotService.getBook} 
                    title = { <h3>Please choose a book:</h3>}
                >
                    <Record label = 'Country' field = 'country'/>
                </ItemDetails>
            </ErrorBoundry>
        )

        return <Row left = {booksList} right = {bookDetails}/>   
    }
}

export default BooksPage