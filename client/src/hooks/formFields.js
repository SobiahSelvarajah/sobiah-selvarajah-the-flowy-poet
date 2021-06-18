import { useState } from 'react';

const useFormFields = (initialState) => {

    const [fields, setFields] = useState(initialState)


    const handleChange = e => {
        setFields({ 
            ...fields, 
            [e.target.name]: e.target.value
        })
    }


    const clearForm = () => {
        setFields(initialState)
    }


    return {
        fields, handleChange, clearForm,
    }

}   

export default useFormFields;