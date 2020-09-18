import React, { Component } from 'react'
import GotService from '../../services/GotService'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemList from '../items-list/ItemsList'


export default class HousesPage extends Component{

    gotService = new GotService();

    state = {
        selectedHouse: null
    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }


    render(){
        return(
            <div className = 'row justify-content-between'>
                <ItemList onItemSelected = {this.onHouseSelected}
                          getData = {() => this.gotService.getAllHouses()}
                          title = {<h3>Houses:</h3>}
                          renderItem = {(item) => <span>{item.name}</span>}
                />
                <ErrorBoundry>
                    <ItemDetails itemId = {this.state.selectedHouse}
                                getData = {this.gotService.getHouse} 
                                title = {<h3>Please choose a house</h3>}
                    />
                </ErrorBoundry>
            </div>
        )
    }
}