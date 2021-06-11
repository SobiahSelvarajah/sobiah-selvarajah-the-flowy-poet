// load required modules
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// callback to read data
const readData = () => {
    return JSON.parse(fs.readFileSync('./data/poems.json'))
};

// callback to write data
const writeData = () => {
    fs.writeFileSync('./data/poems.json', JSON.stringify(myData))
};


//! GET request for list of poems
router.get('/', (_req, res) => {

    const poemsData = readData();

    const poemsFiltered = poemsData.map(poem => {
        return {
            id: poem.data.id,
            // include image bit here
            name: poem.data.name,
            poet: poem.data.poet,
            date: poem.data.date
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




module.exports = router;