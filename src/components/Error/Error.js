import React from 'react'
import img from './not-found.svg'
import './Error.scss'

const Error = () => {

    return(
        <div className = 'error'>
            <img className = 'error-smile' alt = 'spinner' src = {img}/>
            <h2 className = 'mt-2'>Not Found</h2>
        </div>
    )
}

export default Error