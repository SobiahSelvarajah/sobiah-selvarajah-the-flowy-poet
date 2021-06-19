import { useState } from 'react';

const useFormFields = (initialState) => {

    const [fields, setFields] = useState(initialState)


    const handleFieldChange = e => {
        setFields({ 
            ...fields, 
            [e.target.email]: e.target.value,
            [e.target.poemName]: e.target.value,
            [e.target.poet]: e.target.value,
            [e.target.content]: e.target.value
        })
    }


    const clearForm = () => {
        setFields(initialState)
    }


    return {
        fields, handleFieldChange, clearForm
    }

}   

export default useFormFields;