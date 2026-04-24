import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ marginTop: '80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '42px' }}>
        <div style={{ display: 'grid', gap: '20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.02, margin: 0 }}>I craft visual systems rooted in motion, contrast, and storytelling.</h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#c7c7c7', margin: 0 }}>
            My journey began in the world of Computer Science, writing code and building logic. Today, I use that same systematic approach to craft visual identities. For me, design isn't just about making things look good. It’s about building a structure that communicates effectively.

Currently studying Graphic Design at SAIT in Calgary, I bridge the gap between technical precision and artistic intuition. I specialize in building visual systems where motion, contrast, and storytelling work in harmony to elevate brands.
          </p>
        </div>
      </div>
    </div>
  );
}
