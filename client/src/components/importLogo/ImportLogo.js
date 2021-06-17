import React from 'react';
import mainLogo from '../../assets/images/logo-files/resizable_vector_files/Original.svg';
import './ImportLogo.scss';


const ImportLogo = () => {

    return(
            <img 
                className="importLogo" 
                src={mainLogo}
                alt="logo"
            />
    )

}

export default ImportLogo;