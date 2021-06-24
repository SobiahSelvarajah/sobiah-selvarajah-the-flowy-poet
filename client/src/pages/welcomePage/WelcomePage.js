import React from 'react';

import ImportLogo from '../../components/importLogo/ImportLogo';
import IntroImage from '../../components/introImage/IntroImage';
import ImportIntroPoem from '../../components/importIntroPoem/ImportIntroPoem';

import './WelcomePage.scss';


const WelcomePage = () => {

    return(
        <article className="welcomePage__container">
            <div className="welcomePage__positioning">            
            <section className="welcomePage__container-top">
                <ImportLogo /> 
            </section>
                <section className="welcomePage__container-middle">
                    <IntroImage />
                </section>
            </div>                
                <section className="welcomePage__container-bottom">
                    <ImportIntroPoem />
                </section>


        </article>


    )

}

export default WelcomePage;
