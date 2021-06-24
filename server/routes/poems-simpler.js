// load required modules
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// callback to read data
const readData = () => {
    return JSON.parse(fs.readFileSync('./data/poems.json'))
};

// callback to write data
const writeData = (myData) => {
    fs.writeFileSync('./data/poems.json', JSON.stringify(myData))
};



//! GET request for list of poems
router.get('/', (_req, res) => {

    const poemsData = readData();

    const poemsFiltered = poemsData.map(poem => {


        return { 
            id: poem.id,
            poemName: poem.poemName,
            image: poem.image,
            poet: poem.poet,
            likes: poem.likes,
            content: poem.content
        }
    })

    res.status(200)
        .json(poemsFiltered);

});



//! GET request for single poem
router.get('/:poemId', (req, res) => {

    const poemsData = readData();

    const currentPoemId = req.params.poemId;

    const currentPoem = poemsData.find( 
        poem => poem.data.id === currentPoemId);
    
    if (!currentPoem)
        res.status(404)
            .json(`Sorry, the poem with id ${currentPoemId} cannot be found`);
        
    res.status(200)
        .json(currentPoem);

});



//! POST request to post poem
router.post('/', (req, res) => {

    const poemsData = readData();

    const newPoem = {
        id: uuidv4(),
        ...req.body
    }

    poemsData.push(newPoem);
    writeData(poemsData);
    res.status(201)
        .json(newPoem);

});



//! PUT request to update changes to selected whole poem
router.put('/:poemId', (req, res) => {

    const poemsData = readData();
    const singlePoemId = req.params.poemId;
    const updatedPoem = req.body;

    const indexOfPoem = poemsData.findIndex(
        poem => poem.data.id === singlePoemId
    );

    if (indexOfPoem === -1){
        res.status(404)
            .send(`Sorry, the poem with id ${singlePoemId} cannot be found`);
        return;
    }

    poemsData[indexOfPoem] = updatedPoem;
    writeData(poemsData);
    res.status(200)
        .json(updatedPoem)

});



module.exports = router;