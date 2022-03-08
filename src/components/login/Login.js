import React from "react";
import { useState } from "react";
import "../../css/Login.css";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from "validator/lib/isEmail";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState('')

  const handleEmailChange = (e) => {
      const value = e.target.value
      setEmail(value)
  }

  const handlePasswordChange = (e) => {
      const value = e.target.value
      setPassword(value)
  }

  const validateAll = () => {
      const messages = {}
      if (isEmpty(email)) {
          messages.email = "Please input your email"
      } else if (!isEmail(email)) {
          messages.email = "Your email is incorrect"
      }
      
      if (isEmpty(password)) {
          messages.password = "Please input your password"
      }

      setValidate(messages)
      if (Object.keys(messages).length > 0) return false
      return true
  }

  const handleSubmit = () => {
      const isValid = validateAll()
      if (!isValid) return

      //call API LOGIN
  }

  return (
      <div>
          <div className="login">
              <div className="login__intro">
                  <img 
                      className="login__logo"
                      src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                      alt="fakebook"
                  />
                  <p>Facebook giúp bạn connect và share với everyone in life của bạn.</p>
              </div>
              <div className="login__form">  
                  <form>
                      <div className="login__input">
                          <input 
                              className="login__email"
                              placeholder="Email hoặc số điện thoại"
                              onChange={handleEmailChange}
                          />
                      </div>
                      <p className="login_err">{validate.email}</p>
                      <div className="login__input">
                          <input 
                              className="login__password"
                              placeholder="Mật khẩu"
                              onChange={handlePasswordChange}
                          />
                      </div>
                      <p className="login_err">{validate.password}</p>
                      <div className="login__btn">
                          <button 
                              type="button"
                              onClick={handleSubmit}
                          >
                              Đăng nhập
                          </button>
                      </div>
                      <div className="login__forget">
                          <a className="login__forget" href="/">Quên mật khẩu?</a>
                      </div>
                      <div className="login__seperate">
                          <hr />
                      </div>
                      <div className="login__regis">
                          <button>Tạo tài khoản</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Login;
