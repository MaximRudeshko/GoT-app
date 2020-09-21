import React from 'react'

import GotService from '../../services/GotService'
import ItemsList from '../items-list/ItemsList'
import withData from '../withData/withData'




const {
    getAllCharacters,
    getAllBooks,
    getAllHouses
} = new GotService()


const withChildFunction = (Wrapped, fn) => {
    return (
        <Wrapped >
            {fn}
        </Wrapped>
    )
}



export {
    HousesList,
    CharactersList,
    BooksList
}