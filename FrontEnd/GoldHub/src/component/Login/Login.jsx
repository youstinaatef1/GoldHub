import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();   
    // console.log({ email, password });
    // navigate("/dashboard");
  };

  return (
    <div className={`${styles.parent} d-flex justify-content-center align-items-center vh-100 bg-light`}>

      <form
        onSubmit={handleLogin}
        className={`${styles.form} p-5 rounded shadow w-100`}
        style={{ maxWidth: "400px" }}
      >

        {/* Logo */}
        <div className="text-center mb-4">
          {/* <img src={img} alt="logo" style={{ width: "80px" }} /> */}
          <h4 className="mt-2">Welcome Back</h4>
          <small className="text-muted">
            Sign in to your account
          </small>
        </div>

        {/* Email */}
        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button className={`${styles.sign} btn btn-primary w-100`} type="submit">
          Sign In
        </button>
<p className='text-center mt-3'>
  Don't have an account? <Link to="/register" className={styles.linkP}>Register</Link>
</p>
      </form>
    </div>
  );
}

export default Login;