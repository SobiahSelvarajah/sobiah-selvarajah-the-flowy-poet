
import React from 'react';

import './PoemFormInputs.scss';

const PoemFormInputs = ({
    isEdit,
    poemName, 
    setPoemName, 
    poet,
    setPoet, 
    content,
    setContent,
    clearInput,
    handleAddOrEdit
}) => {
    const buttonContent = isEdit ? 'Change' : 'Add';

    return (
        <section className="poemFormInputs__container">
            
            <div className="poemFormInputs__subcontainer">
                <label 
                    htmlFor="poet"
                    className="poemFormInputs__poet"
                >
                    Poet's Name
                </label>
                <input
                    type="text"
                    name="poet"
                    className="poemFormInputs__poet-input"
                    value={poet}
                    onChange={(e) => setPoet(e.target.value)}
                    required
                />
            </div>
            <div className="poemFormInputs__subcontainer">
                <label
                    htmlFor="poemName"
                    className="poemFormInputs__poemName"
                >
                    Poem Name
                </label>
                <input 
                    type="text"
                    name="poemName"
                    className="poemFormInputs__poemName-input"
                    value={poemName}
                    onChange={(e) => setPoemName(e.target.value)}
                    required
                />
            </div>
            <div className="poemFormInputs__subcontainer">
                <label
                    htmlFor="poem"
                    className="poemFormInputs__poem"
                >
                    Your Poem
                </label>
                <textarea
                    type="text"
                    name="poem"
                    className="poemFormInputs__poem-input"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="poemFormInputs__buttons">
                <button 
                    className="poemFormInputs__button"
                    onClick={handleAddOrEdit}
                >
                    {buttonContent}
                </button>
                <button
                    className="poemFormInputs__button"
                    onClick={clearInput}
                >
                    Clear
                </button>
            </div>
        </section>
    )
}

export default PoemFormInputs
