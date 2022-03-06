import { useState, useEffect } from 'react';

const UseForm = Validate => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values))
        setIsSubmitting(true)
    }

    return { handleChange, values, handleSubmit, errors }
}

export default UseForm;