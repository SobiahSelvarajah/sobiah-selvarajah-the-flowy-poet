import React from 'react';

import './DictionaryDefinitions.scss';

const DictionaryDefinitions = (
    {
        word,
        meanings,
        languageList
    }) => {

    return (
        <section className="dictionaryDefinitions__container">
            {word === "" ? 
            (<span className="dictionaryDefinitions__title">Don't know the meaning? Type it in the searchbar!</span>) : 
            (meanings.map((eachMeaning) => (
                eachMeaning.meanings.map((eachDefined) => (
                    eachDefined.definitions.map((def) => (
                        <div
                            className="dictionaryDefinitions__fullMeanings"
                        >
                            {def.definition}
                        </div>
                    ))
                ))
            ))
            )}
        </section>
    )
}

export default DictionaryDefinitions
