import React from 'react'
import PropTypes from 'prop-types'
import './ItemsList.scss'
import withData from '../withData/withData'
import GotService from '../../services/GotService'


const ItemList = ({ children: renderName, title, onItemSelected, data}) => {
    return(
        <div className = 'jumbotron dark characters-list list'>
            {title}
            {
                data.map(item => {
                    const label = renderName(item)
                    return (
                        <li className = 'list-group-item dark'
                            key = {item.id}
                            onClick = {() => onItemSelected(item.id)}
                        >
                            {label}
                        </li>
                    )
                })
            }
        </div>
    )
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    renderName: PropTypes.func,
    title:PropTypes.node
}

export default withData(ItemList)

