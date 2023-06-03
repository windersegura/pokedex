import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import PokedexCard from './components/PokedexCard/PokedexCard'

function App() {
  const [pokemon, setPokemon] = useState('')
  const [pokemonText, setPokemonText] = useState(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonText}`)
      .then((response) => {
        setPokemon(response.data)
      })
  }, [pokemonText])

  const handleWrite = (event) => {
    setPokemonText(event.target.value);
  }



  return (
    <>
      <Header />
      <SearchForm handleWrite={handleWrite} />
      <div className='poke-card'>
        <PokedexCard pokemon={pokemon} />
      </div>

    </>
  )
}

export default App
