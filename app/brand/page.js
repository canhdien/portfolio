import ImageModal from "../../components/Modal";

export default function BrandCampaign() {
  // --- Styles ---
  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '60px 20px',
    fontFamily: 'Inter, system-ui, sans-serif'
  };

  const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#f9f9f9',
    lineHeight: 0,
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
  };

  const sectionStyle = {
    marginBottom: '100px',
    paddingTop: '60px',
    borderTop: '1px solid #eee'
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
      <header style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>Motion Energy</h1>
        <p style={{ color: '#707070', fontSize: '20px', fontWeight: 400 }}>Brand Identity & Commercial Campaign</p>
      </header>

      {/* 1. Objective & Idea Board Section */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Project Objective</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#444' }}>
              This project was developed for a Digital Media assignment, specifically designed for a 15-second commercial using Motion Graphics. 
              The goal was to create a high-performance visual identity that resonates with professional athletes and fitness enthusiasts.
            </p>
          </div>
          
          {/* Tấm hình idea board được thu nhỏ lại ở đây */}
          <div style={{ flex: '0.8', minWidth: '250px' }}>
            <div style={{ ...cardStyle, maxWidth: '350px', margin: '0 auto' }}>
              <ImageModal src="/idea.jpeg" alt="Initial Brief and Requirements" />
            </div>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginTop: '12px' }}>Initial Design Brief & Idea Board</p>
          </div>
        </div>
      </section>

      {/* 2. Design Exploration & Sketches */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Design Exploration</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>36+ hand-drawn sketches exploring the intersection of movement and letterforms.</p>
        
        <div style={sketchGridStyle}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} style={cardStyle}>
              <ImageModal src={`/sket${num}.JPG`} alt={`Sketch exploration phase ${num}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Concept Evolution */}
      <section style={sectionStyle}>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={cardStyle}>
              <ImageModal src="/momentum.png" alt="Momentum & Athlete Starting Block Concept" />
            </div>
          </div>
          
          <div style={{ flex: 1.2, minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '25px' }}>From Speed to Momentum</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
             My initial approach to "Motion" focused heavily on speed and power, represented through lightning-inspired shapes. However, deeper research into the physics of movement led me to the concept of Momentum. I discovered that the trajectory of a moving object often forms patterns that echo the letter 'M' when viewed from specific perspectives.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
              Since Motion Energy is a brand dedicated to athletes, I analyzed their physical movements. I realized that the "Starting Block" posture of professional runners perfectly mimics a leaning, dynamic 'M'. By integrating this athletic stance with the concept of momentum, I developed the final logo: an italicized, forward-leaning 'M' that captures both the energy of the start and the unstoppable flow of an athlete in motion.
            </p>
          </div>
        </div>
      </section>
      {/* 4. Commercial Video */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Commercial Video</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    src="https://www.youtube.com/embed/Ci54836hrZI?si=USyeD_O5dsKK1rjX" 
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Commercial Video"
  />
</div>
      </section>

      {/* 5. Project Mockups */}
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
    </div>
  );
}