import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';

import './DictionaryHeader.scss';

import languageDataList from '../../data/languageList';

const DictionaryHeader = (
    { 
        languageList, 
        setLanguageList, 
        word, 
        setWord
    }) => {

        const handleChange = (language) => {
            setLanguageList(language);
            setWord('')
        };
        
    return (
        <div className="dictionaryHeader__container">
            <span className="dictionaryHeader__heading">
                {word ? word : "Dictionary"}
            </span>
            <div className="dictionaryHeader__inputs">
                <TextField 
                    className="dictionaryHeader__searchBar"
                    label="Enter a word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <TextField 
                    className="dictionaryHeader__language"
                    label="Language"
                    select
                    value={languageList}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {languageDataList.map((option) => (
                        <MenuItem 
                            key={option.label}
                            value={option.label}
                            >
                                {option.value}
                        </MenuItem>                        
                    ))}

                </TextField>
            </div>
            
        </div>
    )
}

export default DictionaryHeader
