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
                    <br />
                    Graduated with a Maths degree 
                    and then decided to delve into the tech industry, 
                    mainly because of my interest in coding and algorithms.
                    <br />
                    <br />
                    As much as I love to code, 
                    there are times when you need to step back and breathe.
                    Poetry lets me destress emotionally,
                    while dancing allows me to step away from reality 
                    and disappear into a world of my own.
                    <br />
                    <br />
                    This poetry webpage is to build a community of aspiring poets, 
                    like a cozy poet's corner.
                    
                </p>
                <img className="aboutMeBio__image" src={me} alt="me"></img>
            </div>
            
        </section>
    )
}

export default AboutMeBio
