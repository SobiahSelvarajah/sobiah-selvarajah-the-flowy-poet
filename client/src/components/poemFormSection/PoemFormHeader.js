
import React from 'react';
import PoemFormInputs from './PoemFormInputs';

import './PoemFormHeader.scss';

const PoemFormHeader = ({
    isEdit,
    poemName,
    setPoemName,
    poet,
    setPoet,
    content,
    setContent,
    clearInput,
    handleAddOrEdit,
}) => { 
    console.log(handleAddOrEdit);
    return (
        <section className="poemFormHeader__container">
            <h2 className="poemFormHeader__heading">
                Discover what others have written and maybe inspire others through your own words!
            </h2>
            <PoemFormInputs 
                isEdit={isEdit}
                poemName={poemName}
                setPoemName={setPoemName}
                poet={poet}
                setPoet={setPoet}
                content={content}
                setContent={setContent}
                clearInput={clearInput}
                handleAddOrEdit={handleAddOrEdit}                
            />
        </section>
    )
}

export default PoemFormHeader
