import SectionBlock from '../components/common/SectionBlock';
import { galleryImages, galleryIntro } from '../data/siteContent';

function GalleryPage() {
  return (
    <>
      <SectionBlock title={galleryIntro.heading} className="gallery-intro">
        <div className="prose-stack gallery-intro-copy">
          {galleryIntro.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock className="gallery-work">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure key={image} className="gallery-card">
              <img
                src={image}
                alt={`Event decor showcase ${index + 1}`}
                loading="lazy"
                width="800"
                height="1066"
              />
            </figure>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default GalleryPage;