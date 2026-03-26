import PageHero from '../components/common/PageHero';
import SectionBlock from '../components/common/SectionBlock';
import { aboutContent } from '../data/siteContent';

function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.heading} image={aboutContent.introImage} className="about-hero" showTitle={false} />

      <SectionBlock className="about-main" title={aboutContent.heading}>
        <div className="prose-stack about-prose">
          {aboutContent.mission.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock className="about-founder-photo">
        <div className="about-founder-photo-wrap">
          <img src={aboutContent.founderImage} alt="" loading="lazy" width="800" height="806" />
        </div>
      </SectionBlock>

      <SectionBlock title={aboutContent.founderTitle} className="about-founder">
        <div className="prose-stack about-prose">
          {aboutContent.founderCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default AboutPage;