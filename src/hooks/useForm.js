import { useState } from "react";

export const userForm = (initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );
    
    // Escuchar cambios en los inputs
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });

    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,

        onInputChange,
        onResetForm,
    }


}