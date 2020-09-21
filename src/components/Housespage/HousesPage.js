import React, { Component } from 'react'
import GotService from '../../services/GotService'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { HousesList } from '../Item-Lists/ItemLists';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import ItemList from '../items-list/ItemsList'
import Row from '../row/Row'
import { GotServiceConsumer } from '../service-context/GotServiceContext';


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
           <GotServiceConsumer>
               {
                   ({getAllHouses}) => {
                       return (
                        <ItemList onItemSelected = {this.onHouseSelected}
                            getData = {getAllHouses}
                            title = {<h3>Houses:</h3>}
                        >
                            {({name}) => <span>{name}</span>}
                        </ItemList> 
                       )
                   }
               }
           </GotServiceConsumer>
        )

        const houseDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedChar} 
                        title = {<h3>Please choose a house</h3>}
                >
                    <Record field = 'gender' label = 'Gender'/>
                </ItemDetails>
            </ErrorBoundry>
        )

        return <Row left={housesList} right = {houseDetails}/>
    }
}