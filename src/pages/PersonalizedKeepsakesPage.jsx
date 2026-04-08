import { Link } from 'react-router-dom';
import SectionBlock from '../components/common/SectionBlock';
import { keepsakesContent } from '../data/siteContent';

function PersonalizedKeepsakesPage() {
  return (
    <>
      <SectionBlock className="keepsakes-intro">
        <div className="keepsakes-intro-shell">
          <h1 className="keepsakes-title">{keepsakesContent.heading}</h1>
          <p>{keepsakesContent.intro}</p>
          <Link className="btn" to={keepsakesContent.primaryCtaHref}>
            {keepsakesContent.primaryCtaLabel}
          </Link>
        </div>
      </SectionBlock>

      <SectionBlock className="keepsakes-services" title={keepsakesContent.servicesHeading}>
        <div className="prose-stack keepsakes-services-copy">
          <p>{keepsakesContent.servicesIntro}</p>
        </div>
        <div className="card-grid three-col keepsakes-cards-grid">
          {keepsakesContent.serviceCards.map((service) => (
            <article key={service.title} className="service-card keepsakes-service-card">
              <img src={service.image} alt={service.title} loading="lazy" width="800" height="560" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="keepsakes-services-cta">
          <Link className="btn" to={keepsakesContent.secondaryCtaHref}>
            {keepsakesContent.secondaryCtaLabel}
          </Link>
        </div>
      </SectionBlock>
    </>
  );
}

export default PersonalizedKeepsakesPage;
