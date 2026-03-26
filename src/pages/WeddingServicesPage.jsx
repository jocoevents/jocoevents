import PageHero from '../components/common/PageHero';
import SectionBlock from '../components/common/SectionBlock';
import { weddingContent, weddingPackages } from '../data/siteContent';

function WeddingServicesPage() {
  return (
    <>
      <PageHero title={weddingContent.heading} image={weddingContent.heroImage} className="wedding-hero" showTitle={false} />

      <SectionBlock className="wedding-intro" title={weddingContent.heading}>
        <p>{weddingContent.intro}</p>
      </SectionBlock>

      {weddingPackages.map((item) => (
        <SectionBlock key={item.name} className="wedding-package-strip">
          <article className="wedding-package-content">
            <div className="wedding-package-intro-box">
              <h1>{item.name}</h1>
              <p className="wedding-package-summary">{item.summary}</p>
            </div>
            <h3>What&apos;s Included</h3>
            <ul className="wedding-includes-list">
              {item.includes.map((entry) => (
                <li key={entry.title}>
                  <strong>{entry.title}</strong>
                  <p>{entry.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </SectionBlock>
      ))}
    </>
  );
}

export default WeddingServicesPage;