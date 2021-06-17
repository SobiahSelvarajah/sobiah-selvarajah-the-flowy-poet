import React from 'react';
import ImportIntroPoem from '../../components/importIntroPoem/ImportIntroPoem';
import ImportLogo from '../../components/importLogo/ImportLogo';
import './WelcomePage.scss';


const WelcomePage = () => {

    return(
        <article className="welcomePage__container">
        <section className="welcomePage__container-top">
            <ImportLogo /> 
        </section>

        <section className="welcomePage__container-bottom">
            <ImportIntroPoem />
        </section>

        </article>


    )

}

export default WelcomePage;
