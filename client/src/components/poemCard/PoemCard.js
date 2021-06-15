import React from 'react';

import './PoemCard.scss'

const PoemCard = () => {
    return (
        <section className="poemCard">
            <div className="poemCard__container">
                <img className="poemCard__image" alt="pic of poem"></img>
                <h2 className="poemCard__name"></h2>
                <div className="poemCard__subheadings">
                    <p className="poemCard__poet"></p>
                    <p className="poemCard__date"></p>
                </div>
                <button className="poemCard__button">View Poem</button>
            </div>
        </section>
    )
}

export default PoemCard;