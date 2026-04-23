import Link from 'next/link';

export default function Navbar() {
  const navStyle = {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eeeeee',
    backgroundColor: '#ffffff',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#707070',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.3s',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 800,
    textDecoration: 'none',
    color: '#1a1a1a',
    letterSpacing: '-1px',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" style={linkStyle}>Work</Link>
          <Link href="#" style={linkStyle}>Contact</Link>
          <Link href="#" style={linkStyle}>About</Link>
        </div>
        <Link href="/" style={logoStyle}>TN.</Link>
      </div>
    </nav>
  );
}