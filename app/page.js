export default function Home() {
  const heroStyle = {
    textAlign: 'center',
    padding: '120px 0 80px',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const itemStyle = {
    display: 'flex',
    height: '550px',
    marginBottom: '40px',
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
  };

  return (
    <>
      <header style={heroStyle}>
        <h1 style={{ fontSize: '56px', fontWeight: 700, letterSpacing: '-2px', marginBottom: '24px' }}>Tin Canh Dien Nguyen</h1>
        <p style={{ fontSize: '19px', color: '#707070', lineHeight: '1.5' }}>
          Visuals define how the world operates today. Through a comprehensive visual identity, I aim to offer new perspectives and bring those visions to life.
        </p>
      </header>

      <section style={{ paddingBottom: '100px' }}>
        {/* Manchester United Project */}
        <div style={itemStyle}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px' }}>
            <h3 style={{ fontSize: '26px', marginBottom: '8px' }}>Manchester United Poster Series</h3>
            <span style={{ color: '#707070', fontSize: '14px' }}>2026</span>
          </div>
          <div style={{ flex: 1.2 }}>
            <a href="/poster">
              <img src="/poster-mockup3.jpg" alt="Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </a>
          </div>
        </div>

        {/* Motion Energy Project (Reverse) */}
        <div style={{ ...itemStyle, flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px' }}>
            <h3 style={{ fontSize: '26px', marginBottom: '8px' }}>Motion Energy</h3>
            <span style={{ color: '#707070', fontSize: '14px' }}>2026</span>
          </div>
          <div style={{ flex: 1.2 }}>
            <a href="/brand">
              <img src="/mockup2.png" alt="Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}