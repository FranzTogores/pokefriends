import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {
    const [pokemons, setPokemons] = useState([])
    const [searchfield, setSearchfield] = useState('')
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setPokemons(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
        const filteredPokemons = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !pokemons.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>PokéFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList pokemons={filteredPokemons} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }



export default App;