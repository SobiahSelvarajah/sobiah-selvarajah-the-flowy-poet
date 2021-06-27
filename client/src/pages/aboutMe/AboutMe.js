import React from 'react';
import VideoPlayer from 'react-video-js-player';

import AboutMeHeader from '../../components/aboutMeHeader/AboutMeHeader';
import AboutMeBio from '../../components/aboutMeBio/AboutMeBio';

import dance from '../../data/dance.MOV';

import './AboutMe.scss'

const AboutMe = () => {
    const videoSrc = dance;

    return (
        <section className="aboutMe__container">
            <AboutMeHeader />
            <AboutMeBio />
            <p className="aboutMe__subheading-hobbies">Digging into my hobbies</p>            
            <div className="aboutMe__video-container">
                <VideoPlayer 
                    className="aboutMe__video"
                    src={videoSrc}
                />
                <span className="aboutMe__video-caption">
                A snippet of me losing myself to the music...
                <br />
                <br />
                Song: Ang Laga De
                </span>
            </div>
        </section>
    )
}

export default AboutMe
