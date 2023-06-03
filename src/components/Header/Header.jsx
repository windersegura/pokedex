import React from 'react'
import PokedexLogo from '../../assets/logo.png'
import './header.css'

function Header() {
    return (
        <div className='pk-header-details'>
            <div className='pk-image'>
                <img src={PokedexLogo} alt="Logo Pokemon" />
            </div>
        </div>
    )
}

export default Header