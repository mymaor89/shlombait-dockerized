import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {methods} from "../../util/api"
import "./ResetPasswordScreen.css";

const ResetPasswordScreen = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const base_url = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}`;

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    // const config = {
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      // const { data } = await axios.put(
      //   `${base_url}/api/auth/passwordreset/${match.params.resetToken}`,
      //   {
      //     password,
      //   },
      //   config
      // );
      //const {data}  = await methods.post(`auth/passwordreset/${match.params.resetToken}`, { password });
      const data = await passwordreset(password)
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={resetPasswordHandler}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error} </span>}
        {success && (
          <span className="success-message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
