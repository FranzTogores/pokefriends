import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemons: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ pokemons: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !pokemons.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>PokéFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList pokemons={filteredPokemons} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }

}

export default App;