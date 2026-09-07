import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"; 

function Signup() {
  return (
    <>
    <Navbar/>
    <main className="auth-page">
      <div className="auth-card">
        <h1>Create Your Account</h1>

        <p className="auth-subtitle">
          Join GigConnet and turn your skills into opportunities
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

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
            <label htmlFor="college">College Name</label>
            <input
              type="text"
              id="college"
              placeholder="Enter your college"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">I want to</label>

            <select id="role" required>
              <option value="">Select your role</option>
              <option value="freelancer">
                Find freelance work
              </option>
              <option value="client">
                Hire a student
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </main>
    </>
  );
}

export default Signup;