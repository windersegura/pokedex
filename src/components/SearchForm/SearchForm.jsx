import React from 'react'
import './searchform.css'

function SearchForm({ handleWrite }) {

    return (
        <div className='pk-form'>
            <input
                type="text"
                onChange={handleWrite}
                placeholder='Escribe el nombre de tu Pokemon'
                className='pk-input'
            />
        </div>
    )

}

export default SearchForm