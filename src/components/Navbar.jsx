import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          GigConnect
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse-gigs">Browse Gigs</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/login">Login</Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;