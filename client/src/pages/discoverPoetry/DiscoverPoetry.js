
import {useState, useEffect} from 'react'
import { useFetch, usePut} from '../../hooks/index';
import { uuid } from 'uuidv4';
import './DiscoverPoetry.scss';
import PoemCard from '../../components/poemCard/PoemCard';
import PoemFormHeader from '../../components/poemFormSection/PoemFormHeader';


const POEM_API_URL = process.env.REACT_APP_API_URL;

const DiscoverPoetry = () => {

    const { poems, error } = useFetch(`${POEM_API_URL}/poems`, []);


    const [poemsList, setPoemsList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [poemName, setPoemName] = useState('');
    const [poet, setPoet] = useState('');
    const [content, setContent] = useState('');
    const [currentPoem, setCurrentPoem] = useState({});

    
    useEffect(() => {
        setPoemsList(poems.map(poem => {return {...poem, isOpen: false}}))
    }, [poems])


    const handleClick = (id) => {
        setPoemsList(poemsList.map(poem => poem.id === id ? {...poem, isOpen: !poem.isOpen} : poem))
    }

    const handleEditClick = (e) => {

        const chosenPoem = poemsList.filter(
            (poem) => poem.id === e.target.value
        );

        setIsEdit(true);
        setCurrentPoem(chosenPoem[0]);
        setPoemName(chosenPoem[0].poemName);
        setPoet(chosenPoem[0].poet);
        setContent(chosenPoem[0].content);
    };

    const clearInput = () => {
        setIsEdit(false);
        setCurrentPoem({});
        setPoemName('');
        setPoet('');
        setContent('')
    }

    const handleAddOrEdit = () => {
        if (isEdit) {
            const newPoem = {
                poemName,
                poet,
                content,
                id: currentPoem.id
            };
            editCurrentPoem(newPoem);
        } else {
            const newPoem = {
                poemName,
                poet,
                content,
                id: uuid()
            };
            addPoem(newPoem);
        }
        clearInput();
    };
    


    const editCurrentPoem = (newPoem) => {
        setPoemsList(
            poemsList.map((poem) => 
            poem.id === currentPoem.id ? newPoem : poem
            )
        );
    };

    //axios request to post poem
    // const handleAddPoem = (e) => {
    //     e.preventDefault();
    //     setPoemsList
    // }

    const addPoem =(newPoem) => {
        setPoemsList([newPoem, ...poemsList]);
    };
    

    return(
        <section className="discoverPoetry__section">
            {error && <p>{error}</p>}
            <div className="discoverPoetry__form">
                <PoemFormHeader 
                    isEdit={isEdit}
                    poemName={poemName}
                    setPoemName={setPoemName}
                    poet={poet}
                    setPoet={setPoet}
                    content={content}
                    setContent={setContent}
                    clearInput={clearInput}
                    handleAddOrEdit={handleAddOrEdit}
                />
            </div>
            <div className="discoverPoetry__poems">
                <div>Endless thoughts, boundless minds...</div>
                <PoemCard 
                    poems={poemsList}
                    handleClick={handleClick} 
                    handleEditClick={handleEditClick}
                />
            </div>
        </section>
    )
}

export default DiscoverPoetry;
