import React from 'react';
import './AboutMeBio.scss';

import me from '../../data/me.jpg';

const AboutMeBio = () => {
    return (
        <section className="aboutMeBio__section">
            <div className="aboutMeBio__container">
                <p className="aboutMeBio__text">
                    My name is Sobiah.
                    <br />
                    Gradua
                    <br />
                    As much as I love to code, 
                    there are times when you need to step back and breathe.
                    Poetry lets me destress emotionally,
                    while dancing allows me to step away from reality 
                    and disappear into a world of my own.
                    
                </p>
                <img className="aboutMeBio__image" src={me} alt="me"></img>
            </div>
            
        </section>
    )
}

export default AboutMeBio
