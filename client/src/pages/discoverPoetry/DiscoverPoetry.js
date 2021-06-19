
import {useState, useEffect} from 'react'
import useFetch from '../../hooks/index';
import './DiscoverPoetry.scss';
import PoemCard from '../../components/poemCard/PoemCard';

const POEM_API_URL = process.env.REACT_APP_API_URL;

const DiscoverPoetry = () => {
    const [poemsList, setPoemsList] = useState([])
    const { poems, error } = useFetch(`${POEM_API_URL}/poems`, [])

    console.log(poems)
    
    useEffect(() => {
        setPoemsList(poems.map(poem => {return {...poem, isOpen: false}}))
    }, [poems])

    console.log(poemsList)

    const handleClick = (id) => {
        setPoemsList(poemsList.map(poem => poem.id === id ? {...poem, isOpen: !poem.isOpen} : poem))
    }

    // console.log(poems);
    return(
        <section className="discoverPoetry">
            {error && <p>{error}</p>}
            <div>Endless thoughts, boundless minds</div>
            <PoemCard handleClick={handleClick} poems={poemsList}/>
        </section>
    )
}

export default DiscoverPoetry;
