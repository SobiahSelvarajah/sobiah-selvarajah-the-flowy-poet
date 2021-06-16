import React, { useState } from 'react';

export function PoemForm(props) {

    const [poem, setPoem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Poem ${poem}`)
    }

    return(
        <form>
            
        </form>
    )
}