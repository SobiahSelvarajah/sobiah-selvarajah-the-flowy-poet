
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useFetch, usePut} from '../../hooks/index';
import { uuid } from 'uuidv4';

import PoemFormHeader from '../../components/poemFormSection/PoemFormHeader';
import PoemCard from '../../components/poemCard/PoemCard';

import './DiscoverPoetry.scss';

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
            editCurrentPoem(currentPoem.id);
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
    
console.log(currentPoem)

    const editCurrentPoem = (poemId) => {
        axios
            .put(`${POEM_API_URL}/poems/${poemId}`)
            .then(res => {
                console.log(res)
                setPoemsList(
                    poemsList.map((poem) => 
                    poem.id === currentPoem.id ? poemId : poem
                    )
                );                
            })
    };



    const addPoem = (newPoem) => { 
        axios
            .post(`${POEM_API_URL}/poems`, newPoem)
            .then(res => {
                setPoemsList([newPoem, ...poemsList]);
            })
        return newPoem
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
                <div className="discoverPoetry__heading">Become inspired...</div>
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
