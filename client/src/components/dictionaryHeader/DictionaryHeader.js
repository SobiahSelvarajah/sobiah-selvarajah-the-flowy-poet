import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';

import './DictionaryHeader.scss';

const DictionaryHeader = () => {
    return (
        <div className="dictionaryHeader__container">
            <span className="dictionaryHeader__heading">
                Word Hunt
            </span>
            <div className="dictionaryHeader__inputs">
                <TextField id="standard-basic" label="Standard" />
                <TextField 
                    id="standard-select-language"
                    select
                    label="Select"
                    helperText="Please select your language"
                >
                    <MenuItem>
                        English
                    </MenuItem>
                </TextField>
            </div>
            
        </div>
    )
}

export default DictionaryHeader
