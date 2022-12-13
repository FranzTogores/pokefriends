import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='pokemons' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
        </div>
    );
}

export default Card;