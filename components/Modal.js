"use client";
import { useState } from 'react';

export default function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    zIndex: 2000,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    overflowY: 'auto'
  };

  const modalContentStyle = {
    margin: '40px auto',
    display: 'block',
    maxWidth: '1200px',
    width: '90%',
    borderRadius: '4px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
  };

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
      </div>

      {isOpen && (
        <div style={modalStyle} onClick={() => setIsOpen(false)}>
          <span style={{ position: 'absolute', top: '20px', right: '35px', fontSize: '40px', cursor: 'pointer' }}>&times;</span>
          <img src={src} style={modalContentStyle} alt="Zoomed view" />
          <div style={{ textAlign: 'center', color: '#707070', padding: '10px' }}>{alt}</div>
        </div>
      )}
    </>
  );
}