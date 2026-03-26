function PageHero({ title, subtitle, image, className = '', showTitle = true }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-grid">
        {image ? (
          <div className="hero-media">
            <img src={image} alt={title} loading="lazy" width="800" height="600" />
          </div>
        ) : null}
        {showTitle ? (
          <div className="hero-copy">
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;