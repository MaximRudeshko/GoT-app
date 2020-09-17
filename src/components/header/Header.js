import React from 'react'
import './Header.scss'


const Header = () => {

    return(
        <header className = 'header'>
            <div className = 'header__title'><a href ='!#'>Game of Thrones</a></div>
            <div className = 'header__nav nav-header'>
                <ul className = 'nav-header__list'>
                    <li className = 'nav-header__item'>
                        Characters
                    </li>
                    <li className = 'nav-header__item'>
                        Houses
                    </li>
                    <li className = 'nav-header__item'>
                        Books
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header