import { textAlign } from "@mui/system";
import React from "react";
import "../../css/Register.css";
import UseForm from "./UseForm";
import Validate from "./Validate";

function Register() {
  const { handleChange, values, handleSubmit, errors } = UseForm(Validate);

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form
        action="http://localhost:8080/FakeStory/api/admin/user"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="form__control">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          <span></span>
          {errors.fullname && <small>{errors.fullname}</small>}
        </div>
        <div className="form__control">
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Email"
            value={values.username}
            onChange={handleChange}
          />
          <span></span>
          {errors.username && <small>{errors.username}</small>}
        </div>
        <div className="form__control">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <span></span>
          {errors.password && <small>{errors.password}</small>}
        </div>

        <div className="form__control">
          <input
            type="password"
            name="rePassword"
            id="confirm-password"
            placeholder="Confirm password"
            value={values.rePassword}
            onChange={handleChange}
          />
          <span></span>
          {errors.rePassword && <small>{errors.rePassword}</small>}
        </div>
        <div className="form__control border">
          <p>Birthday</p>
          <input type="date" id="birthday" name="birthday" />
          <small></small>
        </div>
        <div className="form__control d-flex align-items-center m-4 border-none">
          <h5>Male</h5>
          <input type="radio" id="html" name="sex" value="1" />
          <h5>Female</h5>
          <input type="radio" id="html" name="sex" value="2" />
        </div>
        <input
          type="hidden"
          name="avatar"
          value="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
        />
        <input type="hidden" name="role_id" value="0" />
        <input type="hidden" name="description" value="none" />
        <input type="hidden" name="numberFriends" value="0" />
        <input type="hidden" name="country" value="none" />
        <input type="hidden" name="phone" value="none" />

        <button className="submit" type="submit">
          Register
        </button>
        <div className="form__signup">
          Have account?
          <a href="./login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
