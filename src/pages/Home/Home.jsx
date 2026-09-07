import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";
function Home(){
    return(
        <>
      <Navbar/>
      <main>
        <section>
          <h2>Find Skills. Get Gigs. Earn & Grow.</h2>

          <p>
            A student-powered marketplace where skills become
            opportunities.
          </p>

          <button>Find Freelancers</button>
          <button>Start Earning</button>
        </section>

        <section>
          <h2>Popular Categories</h2>

          <div>
            <article>
              <h3>Web Development</h3>
              <p>Build websites and web applications.</p>
            </article>

            <article>
              <h3>Graphic Design</h3>
              <p>Create logos, posters and creative designs.</p>
            </article>

            <article>
              <h3>Content Writing</h3>
              <p>Write blogs, articles and social media content.</p>
            </article>

            <article>
              <h3>Video Editing</h3>
              <p>Edit videos for creators and businesses.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>How GigConnect Works</h2>

          <div>
            <article>
              <h3>1. Create Your Profile</h3>
              <p>Showcase your skills and experience.</p>
            </article>

            <article>
              <h3>2. Find Opportunities</h3>
              <p>Browse gigs that match your skills.</p>
            </article>

            <article>
              <h3>3. Complete the Work</h3>
              <p>Deliver quality work to your client.</p>
            </article>

            <article>
              <h3>4. Earn & Grow</h3>
              <p>Earn money and build your portfolio.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 GigConnect. Built for students, by students.</p>
      </footer>
    </>
    );
}

export default Home;