import React from 'react';

import './AboutMeHeader.scss';

const AboutMeHeader = () => {
    return (
        <section className="aboutMeHeader__container">
            <span className="aboutMeHeader__heading">
                About Me
            </span>
            <div className="aboutMeHeader__subheading-container">
                <p className="aboutMeHeader__subheading">
                    Web Developer | Poet | Dancer
                </p>
            </div>
        </section>
    )
}

export default AboutMeHeader
