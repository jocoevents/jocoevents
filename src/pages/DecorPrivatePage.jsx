import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionBlock from '../components/common/SectionBlock';
import { decorContent } from '../data/siteContent';

function DecorPrivatePage() {
  return (
    <>
      <PageHero title={decorContent.heading} image={decorContent.heroImage} className="decor-hero" showTitle={false} />

      <SectionBlock title={decorContent.heading} className="decor-intro">
        <div className="prose-stack decor-intro-copy">
          {decorContent.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="card-grid three-col decor-cards-grid">
          {decorContent.serviceCards.map((service) => (
            <article key={service.title} className="service-card decor-service-card">
              <img src={service.image} alt={service.title} loading="lazy" width="800" height="560" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="decor-services-cta">
          <Link className="btn" to={decorContent.cardCtaHref}>
            {decorContent.cardCtaLabel}
          </Link>
        </div>
      </SectionBlock>

      {decorContent.featureBlocks.map((feature) => (
        <SectionBlock key={feature.title} className="decor-feature-block">
          <div className="decor-feature-row">
            <div className="decor-feature-image-wrap">
              <img src={feature.image} alt={feature.title} loading="lazy" width="800" height="1066" />
            </div>
            <article className="decor-feature-content">
              <h2>{feature.title}</h2>
              {feature.copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            <div className="decor-feature-image-wrap">
              {feature.extraImage ? (
                <img src={feature.extraImage} alt={`${feature.title} detail`} loading="lazy" width="800" height="1066" />
              ) : (
                <img src={feature.image} alt={`${feature.title} detail`} loading="lazy" width="800" height="1066" />
              )}
            </div>
          </div>
        </SectionBlock>
      ))}

      <SectionBlock className="decor-planning-section">
        <div className="decor-planning-row">
          <div className="contact-panel decor-planning-copy">
            <h2 className="decor-planning-heading">{decorContent.planningSection.heading}</h2>
            <p>{decorContent.planningSection.intro}</p>
            <p className="decor-planning-list-title">{decorContent.planningSection.listTitle}</p>
            <ul className="decor-planning-list">
              {decorContent.planningSection.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{decorContent.planningSection.outro}</p>
            <p>{decorContent.planningSection.close}</p>
            <Link className="btn" to={decorContent.planningSection.ctaHref}>
              {decorContent.planningSection.ctaLabel}
            </Link>
          </div>
          <div className="decor-planning-image-wrap">
            <img
              src={decorContent.planningSection.image}
              alt={decorContent.planningSection.heading}
              loading="lazy"
              width="800"
              height="560"
            />
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

export default DecorPrivatePage;