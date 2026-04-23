import ImageModal from "../../components/Modal";

export default function PosterPage() {
  const headerStyle = { padding: '80px 0', textAlign: 'center' };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginTop: '40px'
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* FIX: Changed closing tag from </header> to </section> */}
      <section style={headerStyle}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Manchester United Poster Series</h1>
        <p style={{ color: '#707070', maxWidth: '800px', margin: '0 auto' }}>
          My favourite soccer club is Manchester United. With my passion for soccer and Manchester United Club, 
          I want to create some player's posters that I love and their contribution for soccer in their whole life.
        </p>
      </section> 

      <section style={{ marginBottom: '60px' }}>
        {/* Main Mockups */}
        <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden' }}>
          <ImageModal src="/poster-mockup1.jpg" alt="Manchester United Poster Series Mockup" />
        </div>
        
        <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden' }}>
          <ImageModal src="/poster-mockup3.jpg" alt="Bruno Poster Mockup" />
        </div>

        {/* Poster Grid */}
        <div style={gridStyle}>
          {[
            { src: '/burno.jpg', alt: 'Bruno Fernandes Poster' },
            { src: '/rooney-edit.jpg', alt: 'Wayne Rooney Poster' },
            { src: '/mason.jpg', alt: 'Mason Mount Poster' },
            { src: '/linkdein.jpg', alt: 'Bruno Fernandes Storm Atmosphere' }
          ].map((item, index) => (
            <div key={index} style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <ImageModal src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}