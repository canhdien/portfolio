import Link from 'next/link';
import ImageModal from '../../components/Modal';

export default function PosterPage() {
  return (
    <div className="pageRoot">
      <section className="heroSection">
        <div className="heroCard">
          <p className="showcaseLabel">Poster Collection</p>
          <h1 className="heroHeadline">Manchester United Poster Series</h1>
          <p className="heroText">
            A cinematic poster project celebrating football legends via bold portraits, dramatic color, and dynamic energy.
          </p>
          <Link href="/" className="buttonAccent">Return to work</Link>
        </div>
      </section>

      <section className="sectionPanel">
        <div style={{ display: 'grid', gap: '40px' }}>
          <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <ImageModal src="/poster-mockup1.jpg" alt="Manchester United Poster Series Mockup" />
          </div>

          <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <ImageModal src="/poster-mockup3.jpg" alt="Bruno Poster Mockup" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { src: '/burno.jpg', alt: 'Bruno Fernandes Poster' },
              { src: '/rooney-edit.jpg', alt: 'Wayne Rooney Poster' },
              { src: '/mason.jpg', alt: 'Mason Mount Poster' },
              { src: '/linkdein.jpg', alt: 'Bruno Fernandes Storm Atmosphere' }
            ].map((item, index) => (
              <div key={index} style={{ borderRadius: '18px', overflow: 'hidden' }}>
                <ImageModal src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}