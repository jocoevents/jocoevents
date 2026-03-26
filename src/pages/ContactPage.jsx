import SectionBlock from '../components/common/SectionBlock';
import SocialLinks from '../components/common/SocialLinks';
import { contactInfo } from '../data/siteContent';

function ContactPage() {
  return (
    <SectionBlock className="contact-page-section">
      <div className="contact-page-shell">
        <h1 className="contact-page-title">Contact Us</h1>

        <div className="contact-page-image-wrap">
          <img src={contactInfo.contactImage} alt="" loading="lazy" />
        </div>

        <h3 className="contact-subtitle">Email</h3>
        <p className="contact-email-line">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>

        <h3 className="contact-subtitle">Socials</h3>
        <SocialLinks iconOnly />
      </div>
    </SectionBlock>
  );
}

export default ContactPage;