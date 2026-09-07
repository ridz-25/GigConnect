import { useState } from "react";
import Navbar from "../../components/Navbar";
import GigCard from "../../components/GigCard";
import gigs from "../../data/gigs";
function BrowseGigs() {
  const [searchTerm, setSearchTerm]= useState("");
  const [selectedCategory,setSelectedCategory]= useState("");
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </div>

        <div className="gig-grid">
          {gigs
            .filter((gig) =>
              gig.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              (selectedCategory === "" || gig.category === selectedCategory)
            )
            .map((gig) => (
              <GigCard
                key={gig.id}
                title={gig.title}
                description={gig.description}
                category={gig.category}
                price={gig.price}
                seller={gig.seller}
              />
          ))}

          {gigs.filter((gig) =>
          gig.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCategory === "" || gig.category === selectedCategory)
          ).length === 0 && (
          <p className="no-results">
          No gigs found. Try a different search or category.
          </p>
          )}
        </div>

      </section>

    </main>
    </>
  );
}

export default BrowseGigs;