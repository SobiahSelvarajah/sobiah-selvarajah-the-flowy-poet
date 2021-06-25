import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import DictionaryHeader from '../../components/dictionaryHeader/DictionaryHeader';
import './DictionaryPage.scss';
import DictionaryQuote from '../../components/dictionaryQuote/DictionaryQuote';
import DictionaryDefinitions from '../../components/dictionaryDefinitions/DictionaryDefinitions';

const DictionaryPage = () => {

    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [languageList, setLanguageList] = useState("en");

    const dictionaryAPI = async () => {
        try {
            const data = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${languageList}/${word}`
            );

            // console.log(data);
            setMeanings(data.data)
        } catch(error) {
            console.log(error);
        } 
    };


    useEffect(() => {
        dictionaryAPI();
        
    }, [word, languageList])


    return (
        <section className="dictionaryPage__section">
            <Container 
                maxWidth="md"
                className="dictionaryPage__container">
                    <DictionaryQuote />
                    <DictionaryHeader 
                        languageList={languageList}
                        setLanguageList={setLanguageList}
                        word={word}
                        setWord={setWord}
                    />
                    {meanings && (
                        <DictionaryDefinitions 
                            word={word}
                            meanings={meanings}
                            languageList={languageList}
                        />
                    )}
            </Container>    
        </section>
    )
}

export default DictionaryPage
