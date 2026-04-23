export default function Footer() {
  const footerStyle = {
    padding: '80px 0 40px',
    textAlign: 'center',
    borderTop: '1px solid #eeeeee',
    marginTop: '60px'
  };

  const textStyle = {
    fontSize: '13px',
    color: '#b0b0b0',
    margin: 0
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        &copy; 2026 Tin Nguyen. Designed and coded from scratch.
      </p>
    </footer>
  );
}