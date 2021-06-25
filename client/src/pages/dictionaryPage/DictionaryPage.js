import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import DictionaryHeader from '../../components/dictionaryHeader/DictionaryHeader';
import './DictionaryPage.scss';

const DictionaryPage = () => {

    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);

    const dictionaryAPI = async () => {
        try {
            const data = await axios.get(
                "https://api.dictionaryapi.dev/api/v2/entries/en/poet"
            );

            // console.log(data);
            setMeanings(data.data)
        } catch(error) {
            console.log(error);
        } 
    };

    console.log(meanings);

    useEffect(() => {
        dictionaryAPI();
        
    }, [])


    return (
        <section className="dictionaryPage__section">
            <Container 
                maxWidth="md"
                className="dictionaryPage__container">
                    <DictionaryHeader />
            </Container>
            <div className="dictionaryPage__quote">
                <p className="dictionaryPage__quote-text">
                    "Impossible is a word to be found only in the dictionary of fools."
                    <br/>
                    -Napoleon Bonaparte
                </p>
            </div>
            
        </section>
    )
}

export default DictionaryPage
