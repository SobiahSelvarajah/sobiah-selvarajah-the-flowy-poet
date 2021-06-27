import React from 'react';
import VideoPlayer from 'react-video-js-player';
import dance from '../../data/dance.MOV';

import './AboutMe.scss'

const AboutMe = () => {
    const videoSrc = dance;

    return (
        <section>
            <h2>
                Web Developer  |  Poet  |  Dancer
            </h2>
            <div className="aboutMe__video">
                <VideoPlayer 
                    src={videoSrc}
                    width="420"
                    height="220"
                />
            </div>
        </section>
    )
}

export default AboutMe
