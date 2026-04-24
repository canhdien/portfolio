"use client";
import { useState } from 'react';

export default function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyle = {
    display: isOpen ? 'flex' : 'none', // Chuyển sang flexbox để dễ dàng căn giữa
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 2000,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.98)',
  };

  const modalContentStyle = {
    maxWidth: '90vw', // Rộng tối đa 90% chiều rộng màn hình
    maxHeight: '85vh', // Cao tối đa 85% chiều cao màn hình (để chừa chỗ cho caption)
    width: 'auto',
    height: 'auto',
    objectFit: 'contain', // Đảm bảo ảnh giữ đúng tỷ lệ và hiển thị trọn vẹn
    borderRadius: '4px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)', // Tăng độ đậm của shadow lên một chút
  };

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
      </div>

      {isOpen && (
        <div style={modalStyle} onClick={() => setIsOpen(false)}>
          <span style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '35px', 
            fontSize: '40px', 
            color: '#fff', 
            cursor: 'pointer',
            zIndex: 2001 // Đảm bảo nút close luôn nằm trên cùng
          }}>
            &times;
          </span>
          <img src={src} style={modalContentStyle} alt="Zoomed view" />
          {alt && (
            <div style={{ 
              color: '#a0a0a0', 
              paddingTop: '15px', 
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {alt}
            </div>
          )}
        </div>
      )}
    </>
  );
}