import React from 'react';
import mainLogo from '../../assets/images/logo-files/standard_logo_files/Original.png';
import './WelcomePage.scss';


const WelcomePage = () => {

    return(
        <section className="welcomePage">
            <img 
                className="welcomePage__logo" 
                src={mainLogo}
                alt="logo"
            />
            <p>hello</p>
        </section>
    )

}

export default WelcomePage;
