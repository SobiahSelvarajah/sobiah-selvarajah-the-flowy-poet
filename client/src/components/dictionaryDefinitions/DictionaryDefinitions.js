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
                    eachDefined.definitions.map((definedWord) => (
                        <div className="dictionaryDefinitions__fullMeanings">
                            <p className="dictionaryDefinitions__bold">{definedWord.definition}</p>
                            <hr />
                            {definedWord.example && (
                                <span className="dictionaryDefinitions__example-container">
                                    <p className="dictionaryDefinitions__bold">
                                        Example: 
                                    </p>
                                    <p className="dictionaryDefinitions__examples">{definedWord.example}</p>
                                </span>
                            )}
                        </div>
                    ))
                ))
            ))
            )}
        </section>
    )
}

export default DictionaryDefinitions
