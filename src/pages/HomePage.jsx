import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionBlock from '../components/common/SectionBlock';
import SocialLinks from '../components/common/SocialLinks';
import { contactInfo, homeContent } from '../data/siteContent';

function HomePage() {
  return (
    <div className="home-page">
      <PageHero title={homeContent.tagline} subtitle={homeContent.intro} image={homeContent.heroImage} />

      <SectionBlock title="Our Services" width="wide">
        <div className="lead prose-stack">
          {homeContent.servicesIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="card-grid four-col">
          {homeContent.serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.title} loading="lazy" width="800" height="560" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="btn btn-soft" to={service.path}>
                  {service.title === 'Weddings' ? 'Learn \u00a0more' : 'Learn more'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock className="tinted home-about-split">
        <div className="split-grid">
          <img src={homeContent.aboutImage} alt="JO & CO. Events decor setup" loading="lazy" width="500" height="500" />
          <div className="home-about-copy">
            <h2>About us</h2>
            <p>
              Planning a birthday, bridal shower, baby shower, engagement, wedding, proposal, corporate party,
              or any special event? Let JO &amp; CO. Events bring your vision to life with your loved ones!
            </p>
            <p>
              From stunning balloon arches &amp; customized backdrops to engraved keepsake boxes - every detail is
              handled with love and creativity.
            </p>
            <Link className="btn" to="/about-us">
              Learn more
            </Link>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Contact us">
        <div className="home-contact-grid">
          <div className="home-contact-info">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>

            <h3>Socials</h3>
            <SocialLinks iconOnly align="left" />
          </div>

          <div className="home-contact-info">
            <h3>{contactInfo.locationTitle}</h3>
            <p>{contactInfo.locationText}</p>

            <div className="map-wrapper">
              <iframe
                title="Coquitlam, BC"
                src="https://www.google.com/maps?q=Coquitlam%2C%20BC&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}

export default HomePage;