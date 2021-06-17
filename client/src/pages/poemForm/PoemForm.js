import React, { useState } from 'react';


const PoemForm = (props) => {

    const [poem, setPoem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Poem ${poem}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <section className="poemSubmitForm__container">
                <h2 className="poemSubmitForm__heading">
                    Here's your chance to inspire others by spreading your poetic wings...
                </h2>
                <h3 className="poemSubmitForm__subheading">
                    Please fill out the relevant details below
                </h3>
                <div className="poemSubmitForm__poet-details">
                    <p className="poemSubmitForm__poet-heading">
                        Poet's Details
                    </p>
                    <label 
                        htmlFor="username"
                        className="poemSubmitForm__username">
                            Your Name
                        <span className="poemSubmitForm__star">*</span>
                    </label>
                    <input 
                        type="text"
                        className="poemSubmitForm__username-input"
                        id="formUsername"
                        name="name"
                        placeholder="e.g. The Flowy Poet"
                        required
                    />
                    <label 
                        htmlFor="email" 
                        className="poemSubmitForm__user-email">
                            Your Email
                        <span className="poemSubmitForm__star">*</span>
                    </label>
                    <input 
                        type="email"
                        className="poemSubmitForm__user-email-input"
                        id="formUserEmail"
                        placeholder="e.g. theFlowyPoet@gmail.com"
                        maxLength="50"
                        required
                    />
                </div>
                <div className="poemSubmitForm__poem-details">
                    <p className="poemSubmitForm__poem-heading">
                        Your Poem Details
                    </p>
                    <label 
                        htmlFor="poemName"
                        className="poemSubmitForm__poem-name">
                            Name
                        <span className="poemSubmitForm__star">*</span>
                    </label>
                    <input 
                        type="text"
                        className="poemSubmitForm__poem-name-input"
                        id="formPoemName"
                        name="poemName"
                        placeholder="e.g. Fireflies"
                        required
                    />
                    <label 
                        htmlFor="poem"
                        className="poemSubmitForm__poem">
                            Poem
                        <span className="poemSubmitForm__star">*</span>
                    </label>
                    <textarea
                        type="text"
                        className="poemSubmitForm__poem-input"
                        id="formPoem"
                        name="poem"
                        placeholder="e.g I'll be my own light&#10;my own little firefly"
                        required
                    ></textarea>
                    <label 
                        htmlFor="poemImage"
                        className="poemSubmitForm__poem-image">
                            You can choose an image to upload with your poem:
                    </label>
                    <input 
                        type="file"
                        id="formPoemImage"
                        name="image"
                        accept="
                            image/png, 
                            image/svg, 
                            image/jpeg, 
                            image/jpg"
                    />
                </div>
                <div className="poemSubmitForm__buttons">
                    <button 
                        type="submit"
                        className="poemSubmitForm__submit-poem"
                    >
                        Submit Poem
                    </button>
                </div>
            </section>
            
        </form>
    )
}

export default PoemForm;