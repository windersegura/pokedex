import React from 'react'
import './pokecard.css'

function PokedexCard({ pokemon }) {
    return (
        <div className='pk-main-card'>
            <img
                className='pk-main-img'
                src={pokemon?.sprites?.other?.home?.front_default}
                alt="Pokemon" />
            <h3>{pokemon?.name}</h3>
        </div>
    )
}

export default PokedexCard