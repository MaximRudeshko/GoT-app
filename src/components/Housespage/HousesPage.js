import React, { Component } from 'react'
import GotService from '../../services/GotService'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import ItemList from '../items-list/ItemsList'
import Row from '../row/Row'


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

        const housesList = (
            <ItemList onItemSelected = {this.onHouseSelected}
                getData = {() => this.gotService.getAllHouses()}
                title = {<h3>Houses:</h3>}
                renderName = {(item) => <span>{item.name}</span>}
            />
        )

        const houseDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedHouse}
                    getData = {this.gotService.getHouse} 
                    title = {<h3>Please choose a house</h3>}
                >
                    <Record label = 'Region' field = 'region'/>
                </ItemDetails>
            </ErrorBoundry>
        )


        return <Row left={housesList} right = {houseDetails}/>
    }
}