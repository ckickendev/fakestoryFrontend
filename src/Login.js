import React from "react";
import "./css/Login.css";

function Login() {
  /* const [state, dispatch] = useStateValue();

    const signIn = () => {
        // SIGN IN ................
        auth
            .signInWithPopup(provider)
            .then((result) => {
    
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message))
    } */

  return (
    <div>
      <div className="login">
        <div className="login__intro">
          <img
            className="login__logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fakebook"
          />
          <p>
            Facebook giúp bạn connect và share với everyone in life của bạn.
          </p>
        </div>
        <div className="login__form">
          <form>
            {/* <div className="login__input">
                        <input 
                            className="login__email"
                            placeholder="Email hoặc số điện thoại"
                        />
                    </div>
                    <div className="login__input">
                        <input 
                            className="login__password"
                            placeholder="Mật khẩu"
                        />
                    </div> */}
            <div className="login__btn">
              <button type="submit">Đăng nhập bằng email</button>
            </div>
            <div className="login__forget">
              <a className="login__forget" href="/">
                Quên mật khẩu?
              </a>
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
  );
}

export default Login;