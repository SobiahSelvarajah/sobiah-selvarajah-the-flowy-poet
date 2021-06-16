import useFetch from '../../hooks/index';
import './DiscoverPoetry.scss';
import PoemCard from '../../components/poemCard/PoemCard';

const POEM_API_URL = process.env.REACT_APP_API_URL;

const DiscoverPoetry = () => {
    const { poems, error } = useFetch(`${POEM_API_URL}/poems`, [])

    // console.log(poems);
    return(
        <section className="discoverPoetry">
            {error && <p>{error}</p>}
            <div>Endless thoughts, boundless minds</div>
            <PoemCard poems={poems}/>
        </section>
    )
}

export default DiscoverPoetry;
