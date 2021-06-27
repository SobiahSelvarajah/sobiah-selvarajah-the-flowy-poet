import { useEffect, useState } from 'react';
import axios from 'axios';

//! Custom reusable fetch hook
//! fetches the data 
//! sets errors if there is any

export const useFetch = (url, initialState) => {
    
    const [poems, setPoems] = useState(initialState)
    const [error, setError] = useState('')

    useEffect(() => {
        async function getPoems() {
            try {
                const res = await axios.get(url)
                const poems = res.data
                setPoems(poems)
            } catch (err) {
                setError(err.message)
            }
        }
        getPoems()
    }, [url])

    return { poems, error }
}


