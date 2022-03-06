import React from 'react'
import "../../css/Register.css"
import UseForm from './UseForm'
import Validate from './Validate'

function Register() {
    const { handleChange, values, handleSubmit, errors } = UseForm(Validate)

    return (
        <div className="register">
            <h1 class="register__title">Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <div class="form__control">
                    <input 
                        type="text" 
                        name="username"
                        id="username" 
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <span></span>
                    {errors.username && <small>{errors.username }</small>}
                </div>
                <div class="form__control">
                    <input 
                        type="email" 
                        name="email"
                        id="email" 
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <span></span>
                    {errors.email && <small>{errors.email }</small>}
                </div>
                <div class="form__control">
                    <input 
                        type="password"
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <span></span>
                    {errors.password && <small>{errors.password }</small>}
                </div>
                <div class="form__control">
                    <input 
                        type="password"
                        name="rePassword" 
                        id="confirm-password" 
                        placeholder="Confirm password"
                        value={values.rePassword}
                        onChange={handleChange}
                    />
                    <span></span>
                    {errors.rePassword && <small>{errors.rePassword }</small>}
                </div>

                <button class="submit">Login</button>
                <div class="form__signup">Not a member?
                    <a href="#">Signup</a>
                </div>
            </form>
        </div>
    )
}

export default Register