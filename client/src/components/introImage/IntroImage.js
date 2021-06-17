import React from 'react';
import stones from '../../assets/images/introImage.jpg';
import './IntroImage.scss';


const IntroImage = () => {

    return(
        <img 
            className="introImage" 
            src={stones}
            alt="stones"
        />
    )

}

export default IntroImage;