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
            <div className="dictionaryDefinitions__audio-container">
                {word && meanings[0] && languageList === "en" && (
                    <audio
                        className="dictionaryDefinitions__audio"
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        controls
                    >
                        Sorry, audio not supported by browser
                    </audio>
                )}
            </div>
            {word === "" ? 
            (<span className="dictionaryDefinitions__title">Don't know the meaning? Type it in the searchbar!</span>) : 
            (meanings.map((eachMeaning) => (
                eachMeaning.meanings.map((eachDefined) => (
                    eachDefined.definitions.map((definedWord) => (
                        <div className="dictionaryDefinitions__fullMeanings-container">
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
                        </div>
                    ))
                ))
            ))
            )}
        </section>
    )
}

export default DictionaryDefinitions
