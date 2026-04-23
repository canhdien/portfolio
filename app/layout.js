// Use ./ instead of @ to look in the current project structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  // Global container style to match your original 'container' class
  const globalContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <Navbar />
        <div style={globalContainerStyle}>
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
        {/* Analytics nằm ở đây, trước khi đóng thẻ body là đẹp nhất */}
        <Analytics /> 
      </body>
    </html>
  )
}