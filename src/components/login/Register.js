import React from 'react'
import "../../css/Register.css"

function Register() {
  return (
    <div className="register">
        <h1 class="register__title">Register</h1>
        <form action="">
            <div class="form__control">
                <input type="text" id="username" placeholder="Username"/>
                <span></span>
                <small></small>
            </div>
            <div class="form__control">
                <input type="email" id="email" placeholder="Email"/>
                <span></span>
                <small></small>
            </div>
            <div class="form__control">
                <input type="password" id="password" placeholder="Password"/>
                <span></span>
                <small></small>
            </div>
            <div class="form__control">
                <input type="password" id="confirm-password" placeholder="Confirm password"/>
                <span></span>
                <small></small>
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