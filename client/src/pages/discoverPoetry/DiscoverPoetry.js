import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiscoverPoetry';
import PoemCard from '../../components/poemCard/PoemCard';

export const POEM_API_URL = process.env.REACT_APP_API_URL;


const DiscoverPoetry = () => {

    const [ poems, setPoems ] = useState([]);
    const [ loading, setLoading] = useState(true)


    useEffect(() => {
        axios({
            method: 'GET',
            url:`${POEM_API_URL}/poems`
        })
        .then(res => { 
            setPoems(res.data)
            setLoading(false)
        })

    },[]);

    return(
        <section className="discoverPoetry">
            {loading &&
                <p>It's loading</p>
            }
            { !loading && 
                <section>
                    <div>Endless thoughts, boundless minds...</div>
                    <PoemCard poems={poems}/>
                </section>
            }
            
        </section>
    )
}

export default DiscoverPoetry;