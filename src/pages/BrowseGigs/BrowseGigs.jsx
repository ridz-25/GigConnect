import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
function BrowseGigs() {
  return (
    <>
    <Navbar/>
    <main className="browse-page">

      <section className="browse-header">
        <h1>Find the Right Student Talent</h1>

        <p>
          Explore gigs offered by talented college students.
        </p>
      </section>

      <section className="gig-section">

        <div className="search-area">
          <input
            type="text"
            placeholder="Search for a service..."
          />

          <select>
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="design">Graphic Design</option>
            <option value="writing">Content Writing</option>
            <option value="video">Video Editing</option>
          </select>
        </div>

        <div className="gig-grid">

          <article className="gig-card">
            <h2>Responsive React Website</h2>
            <p>
              I will build a modern responsive website using React.
            </p>

            <p className="gig-seller">
              By: Student Developer
            </p>

            <strong>₹1,500</strong>

            <button>View Gig</button>
          </article>

          <article className="gig-card">
            <h2>Professional Logo Design</h2>
            <p>
              I will create a clean and modern logo for your brand.
            </p>

            <p className="gig-seller">
              By: Student Designer
            </p>

            <strong>₹500</strong>

            <button>View Gig</button>
          </article>

          <article className="gig-card">
            <h2>Content Writing</h2>
            <p>
              I will write engaging blogs and website content.
            </p>

            <p className="gig-seller">
              By: Student Writer
            </p>

            <strong>₹700</strong>

            <button>View Gig</button>
          </article>

        </div>

      </section>

    </main>
    </>
  );
}

export default BrowseGigs;