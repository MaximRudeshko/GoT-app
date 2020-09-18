import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


const Header = () => {

    return(
        <header className = 'header'>
            <div className = 'header__title'><Link to='/'>Game of Thrones</Link></div>
            <div className = 'header__nav nav-header'>
                <ul className = 'nav-header__list'>
                    <li className = 'nav-header__item'>
                        <Link to = '/characters/'>Characters</Link>
                    </li>
                    <li className = 'nav-header__item'>
                        <Link to = '/houses/'>Houses</Link>
                    </li>
                    <li className = 'nav-header__item'>
                        <Link to = '/books/'>Books</Link>
                    </li>
                </ul>
            </div>
        </header>
              
    )
}

export default Header


              

