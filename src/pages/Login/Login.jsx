import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"; 
function Login() {
  return (
    <>
    <Navbar/>
    <main className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue to GigConnet
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </main>
    </>
  );
}

export default Login;