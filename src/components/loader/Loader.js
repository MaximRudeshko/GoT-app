import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className = 'jumbotron dark characters-list list'>
            <div className = 'loader'>
                <div className="lds-dual-ring"></div>
            </div>
        </div>
    )
}

export default Loader