import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userName,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed");
      } else {
        console.log(data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${styles.parentR} d-flex justify-content-center align-items-center vh-100 bg-light`}
    >
      <form
        onSubmit={handleRegister}
        className={`${styles.formR} p-5 rounded shadow w-100`}
        style={{ maxWidth: "400px" }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          <h4 className="mt-2">Sign In</h4>
        </div>

        {/* Username */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
            {/* <option value="admin">Admin</option> */}
          </select>
        </div>

        {/* Button */}
        <button
          className={`${styles.sign} btn btn-primary w-100`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>

        {message && (
          <div className="alert alert-info mt-3">
            {message}
          </div>
        )}
        <p className="text-center mt-3">
  Already have an account? <Link to="/" className={styles.linkP}>Login</Link>
</p>
      </form>
    </div>
  );
}

export default Register;