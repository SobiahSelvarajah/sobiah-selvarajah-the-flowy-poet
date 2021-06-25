import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';

import './DictionaryHeader.scss';

import languageList from '../../data/languageList';

const DictionaryHeader = () => {
    return (
        <div className="dictionaryHeader__container">
            <span className="dictionaryHeader__heading">
                Dictionary
            </span>
            <div className="dictionaryHeader__inputs">
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                />
                <TextField 
                    id="standard-select-language"
                    select
                    value
                    label="Select"
                    helperText="Please select your language"
                >
                    {languageList.map((option) => (
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
