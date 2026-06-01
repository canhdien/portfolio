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


      {/* Original Poster Collection Section */}
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
      {/* Project Idea Section: Behind the Design */}
      <section style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '800px', lineHeight: '1.6',margin: '0 auto' }}>
          <h2 style={{  fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.02em' }}>Behind the Design</h2>
          <p style={{ marginBottom: '16px', fontSize: '1.15rem' }}>
            This collection is dedicated to my favorite Manchester United players. I chose this theme out of a deep interest in soccer poster design, specifically for Manchester United. Whenever I see official club posters, I'm struck by the strength and passion they convey, and I wanted to capture that same emotion in my own work.
            <br />
            To create a sense of unity across the designs, I used consistent background styles and colors to naturally highlight the iconic red jersey. Additionally, all player names are prominently placed at the top of the posters so they can be easily viewed.</p>
        </div>
      </section>

      {/* Moodboard and Vision Statement Section */}
      <section style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '100%' }}>
          <h2 style={{  fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.02em'}}>
            Moodboard and Vision Statement
          </h2>
          <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            <ImageModal src="/moodboard-for-poster.png" alt="Manchester United Moodboard" />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <p style={{ lineHeight: '1.6', fontSize: '1.15rem' }}>
              This collection explores a spectrum of motions, from triumphant celebration to deep nostalgia. Through the use of narrative compositions, my goal is to create designs that are immediately eye-catching, while also allowing the viewer to understand the story and legacy behind each player.
            </p>
          </div>
        </div>
      </section>
      {/*  Creative Process Section */}
     <section style={{ paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.02em' }}>
            Creative Process
          </h2>
          
          <style>{`
            .process-container {
              display: flex;
              flex-direction: column;
              gap: 24px;
              align-items: center;
            }
            .process-step {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              width: 100%;
              max-width: 350px;
            }
            .process-step h4 {
              font-size: 1.2rem;
              font-weight: 600;
              text-transform: lowercase;
              margin-bottom: 12px;
            }
            .process-step p {
              font-size: 0.9rem;
              line-height: 1.5;
              margin-top: 12px;
              opacity: 0.9;
            }
            .process-images {
              display: flex;
              gap: 12px;
              width: 100%;
              justify-content: center;
            }
            .process-img-wrapper {
              flex: 1;
              border-radius: 12px;
              overflow: hidden;
              background: #222; /* Placeholder background */
              border: 1px dashed #555;
              display: flex;
            }
   
            .process-img-wrapper > *,
            .process-img-wrapper img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
              display: block;
            }
            .mobile-arrow {
              display: block;
              margin: 16px 0;
              opacity: 0.5;
            }
            .desktop-arrow {
              display: none;
              opacity: 0.5;
            }
            @media (min-width: 900px) {
              .process-container {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                grid-template-rows: auto auto auto auto auto;
                gap: 20px 40px;
                align-items: center;
                justify-items: center;
              }
              .mobile-arrow { display: none; }
              .desktop-arrow { display: block; }
              
              .step-rough { grid-column: 1; grid-row: 1; }
              .arrow-1 { grid-column: 2; grid-row: 1; }
              .step-insp { grid-column: 3; grid-row: 1; }
              
              .arrow-2 { grid-column: 3; grid-row: 2; }
              
              .step-draft { grid-column: 3; grid-row: 3; }
            .arrow-3 { grid-column: 2; grid-row: 3; }
            .step-feed { grid-column: 1; grid-row: 3; }
            
            .arrow-4 { grid-column: 1 / span 3; grid-row: 4; }
            
            .step-final { grid-column: 1 / span 3; grid-row: 5; max-width: 400px; }
          }
        `}</style>
        <div className="process-container">
            {/* 1. ROUGH */}
            <div className="process-step step-rough">
              <h4>rough</h4>
              <div className="process-images">
                <div className="process-img-wrapper">
                  <ImageModal src="/creativeprocess4.JPG" alt="Rough Sketch" />
                </div>
              </div>
            </div>

            <svg className="desktop-arrow arrow-1" width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,12 L75,12 M65,2 L75,12 L65,22" />
            </svg>
            <svg className="mobile-arrow" width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,35 M2,25 L12,35 L22,25" />
            </svg>

            {/* 2. INSPIRATION */}
            <div className="process-step step-insp">
              <h4>inspiration</h4>
              <div className="process-images">
                <div className="process-img-wrapper">
                  <ImageModal src="/moodboard5.png" alt="Inspiration 1" />
                </div>
                <div className="process-img-wrapper">
                  <ImageModal src="/moodboard1.webp" alt="Inspiration 2" />
                </div>
              </div>
              <p>I was inspired by two designs and tried to apply their composition to my design.</p>
            </div>
            <svg className="desktop-arrow arrow-2" width="24" height="60" viewBox="0 0 24 60" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,55 M2,45 L12,55 L22,45" />
            </svg>
            <svg className="mobile-arrow" width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,35 M2,25 L12,35 L22,25" />
            </svg>

            {/* 3. DRAFT */}
            <div className="process-step step-draft">
              <h4>draft</h4>
              <div className="process-images">
                <div className="process-img-wrapper">
                  <ImageModal src="/creativeprocess1.png" alt="Draft 1" />
                </div>
                <div className="process-img-wrapper">
                  <ImageModal src="/creativeprocess2.jpg" alt="Draft 2" />
                </div>
              </div>
              <p>These drafts were my first ideas and attempts. I tried to apply the same composition and color palette.</p>
            </div>
            <svg className="desktop-arrow arrow-3" width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M80,12 L5,12 M15,2 L5,12 L15,22" />
            </svg>
            <svg className="mobile-arrow" width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,35 M2,25 L12,35 L22,25" />
            </svg>

            {/* 4. FEEDBACK */}
            <div className="process-step step-feed">
              <h4>feedback</h4>
              <div className="process-images">
                <div className="process-img-wrapper">
                  <ImageModal src="/creativeprocess3.png" alt="Feedback Text" />
                </div>
              </div>
              <p>This is the feedback that I received from my peers.</p>
            </div>
            <svg className="desktop-arrow arrow-4" width="24" height="60" viewBox="0 0 24 60" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,55 M2,45 L12,55 L22,45" />
            </svg>
            <svg className="mobile-arrow" width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12,0 L12,35 M2,25 L12,35 L22,25" />
            </svg>

            {/* 5. FINAL */}
            <div className="process-step step-final">
              <h4>final</h4>
              <div className="process-images">
                <div className="process-img-wrapper">
                  <ImageModal src="/rooney-edit.jpg" alt="Final Design" />
                </div>
              </div>
              <p>This is the final design, updated with changes based on the feedback.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
    
  );
}