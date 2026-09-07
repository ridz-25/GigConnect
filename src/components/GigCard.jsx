function GigCard({ title, description, category, price, seller }) {
  return (
    <article className="gig-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <p className="gig-category">
        Category: {category}
      </p>

      <p className="gig-seller">
        By: {seller}
      </p>

      <strong>₹{price}</strong>

      <button>View Gig</button>
    </article>
  );
}

export default GigCard;