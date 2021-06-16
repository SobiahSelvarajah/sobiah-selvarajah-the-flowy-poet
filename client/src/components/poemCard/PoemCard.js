import React from 'react';

import './PoemCard.scss'
// funtionality to like and edit poem

const PoemCard = ({poems}) => {

    
    return (
        <main className="poemCard">
            {poems.map((poem)=> ( 
            <div className="poemCard__container" key={poem.id}>
                <img className="poemCard__image" src={poem.image} alt="pic of poem"></img>
                <h2 className="poemCard__name">{poem.name}</h2>
                <div className="poemCard__subheadings">
                    <p className="poemCard__poet">{poem.poet}</p>
                    <p className="poemCard__date">{poem.date}</p>
                </div>
                <button className="poemCard__button">View Poem</button>
            </div>
            ))}
        </main>
    )
}

export default PoemCard;