function SectionBlock({ title, children, className = '', width = 'default' }) {
  return (
    <section className={`section-block ${className} ${width === 'wide' ? 'is-wide' : ''}`.trim()}>
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export default SectionBlock;