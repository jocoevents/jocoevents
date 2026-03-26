function PackageCard({ name, summary, includes, ctaHref }) {
  return (
    <article className="package-card">
      <h3>{name}</h3>
      <p>{summary}</p>
      <h4>What is included</h4>
      <ul>
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="btn btn-outline" href={ctaHref}>
        Ask about this package
      </a>
    </article>
  );
}

export default PackageCard;