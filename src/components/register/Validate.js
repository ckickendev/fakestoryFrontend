import React from 'react'

function Validate(values) {
    let errors = {};

    // USERNAME
    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    // Email
    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    // Password
    if (!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters"
    }

    // Re-Password
    if (!values.rePassword) {
        errors.rePassword = "Confirm password required"
    } else if (values.rePassword !== values.password) {
        errors.rePassword = "Password do not match"
    }
    
    return errors
}

export default Validate