
import React from 'react'

const PoemFormInputs = ({
    isEdit,
    poemName, 
    setPoemName, 
    poet,
    setPoet, 
    content,
    setContent,
    clearInput,
    hamdleAddOrEdit
}) => {
    const buttonContent = isEdit ? 'Change' : 'Add';

    return (
        <form>
            
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
            <button 
                className="poemFormInputs__button"
                onClick={hamdleAddOrEdit}
            >
                {buttonContent}
            </button>
            <button
                className="poemFormInputs__button"
                onClick={clearInput}
            >
                Clear
            </button>
        </form>
    )
}

export default PoemFormInputs
