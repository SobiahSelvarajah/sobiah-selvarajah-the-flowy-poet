import React from 'react';
import VideoPlayer from 'react-video-js-player';
import AboutMeHeader from '../../components/aboutMeHeader/AboutMeHeader';
import dance from '../../data/dance.MOV';

import './AboutMe.scss'

const AboutMe = () => {
    const videoSrc = dance;

    return (
        <section className="aboutMe__container">
            <AboutMeHeader />
            <div className="aboutMe__video-container">
                <VideoPlayer 
                    className="aboutMe__video"
                    src={videoSrc}
                />
                A snippet of me losing myself to the music...
                <br />
                Song: Ang Laga De
            </div>
        </section>
    )
}

export default AboutMe
