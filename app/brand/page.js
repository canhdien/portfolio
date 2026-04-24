import ImageModal from "../../components/Modal";
import Link from 'next/link';

export default function BrandCampaign() {
  // --- Styles ---
  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '60px 20px',
    fontFamily: 'Inter, system-ui, sans-serif',
    color: '#f5f5f5'
  };

  const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    background: 'rgba(255,255,255,0.06)',
    lineHeight: 0,
    boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
    border: '1px solid rgba(255,255,255,0.1)'
  };

  const sectionStyle = {
    marginBottom: '100px',
    paddingTop: '60px',
    borderTop: '1px solid rgba(255,255,255,0.12)'
  };

  const sketchGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '30px'
  };

  const flexGridStyle = {
    display: 'flex',
    gap: '40px',
    marginTop: '40px',
    alignItems: 'flex-start'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    flex: 1
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <section className="heroSection">
        <div className="heroCard">
          <p className="showcaseLabel">Brand Identity</p>
          <h1 className="heroHeadline">Motion Energy</h1>
          <p className="heroText">
            A performance-focused energy drink brand designed for athletes and active individuals
          </p>
          <Link href="/" className="buttonAccent">Return to work</Link>
        </div>
      </section>

      {/* 1. Commercial Video (Moved to Top) */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Commercial Video</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://we7axmlpl5eksxob.public.blob.vercel-storage.com/motion2.mp4" 
            frameBorder="0"
            allowFullScreen
            title="Commercial Video"
          />
        </div>
      </section>

      {/* 2. Project Mockups (Moved to Top) */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Final Identity in Context</h2>
        <div style={flexGridStyle}>
          <div style={columnStyle}>
            <div style={cardStyle}><ImageModal src="/mockup2.png" alt="Can Design 1" /></div>
            <div style={cardStyle}><ImageModal src="/can-mockup4.jpg" alt="Outdoor Advertising" /></div>
          </div>
          <div style={columnStyle}>
            <div style={cardStyle}><ImageModal src="/mockup3.jpg" alt="Merchandise Branding" /></div>
            <div style={cardStyle}><ImageModal src="/can-mockup5.jpg" alt="Editorial Showcase" /></div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS --- */}
      
      {/* 3. Objective & Idea Board Section */}
      <section style={sectionStyle}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Project Objective</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#d1d1d1' }}>
              This project was developed for a Digital Media assignment, specifically designed for a 15-second commercial using Motion Graphics. 
              The goal was to create a high-performance visual identity that resonates with professional athletes and fitness enthusiasts.
            </p>
          </div>
          
          <div style={{ flex: '0.8', minWidth: '250px' }}>
            <div style={{ ...cardStyle, maxWidth: '350px', margin: '0 auto' }}>
              <ImageModal src="/idea.jpeg" alt="Initial Brief and Requirements" />
            </div>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginTop: '12px' }}>Initial Design Brief & Idea Board</p>
          </div>
        </div>
      </section>

      {/* 4. Design Exploration & Sketches */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px', color: '#fff' }}>Design Exploration</h2>
        <p style={{ color: '#bdbdbd', marginBottom: '30px' }}>36+ hand-drawn sketches exploring the intersection of movement and letterforms.</p>
        
        <div style={sketchGridStyle}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} style={cardStyle}>
              <ImageModal src={`/sket${num}.JPG`} alt={`Sketch exploration phase ${num}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Concept Evolution */}
      <section style={sectionStyle}>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={cardStyle}>
              <ImageModal src="/momentum.png" alt="Momentum & Athlete Starting Block Concept" />
            </div>
          </div>
          
          <div style={{ flex: 1.2, minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '25px', color: '#fff' }}>From Speed to Momentum</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d1d1', marginBottom: '20px' }}>
             My initial approach to "Motion" focused heavily on speed and power, represented through lightning-inspired shapes. However, deeper research into the physics of movement led me to the concept of Momentum. I discovered that the trajectory of a moving object often forms patterns that echo the letter 'M' when viewed from specific perspectives.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d1d1' }}>
              Since Motion Energy is a brand dedicated to athletes, I analyzed their physical movements. I realized that the "Starting Block" posture of professional runners perfectly mimics a leaning, dynamic 'M'. By integrating this athletic stance with the concept of momentum, I developed the final logo: an italicized, forward-leaning 'M' that captures both the energy of the start and the unstoppable flow of an athlete in motion.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}