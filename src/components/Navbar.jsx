import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      padding: '20px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1a56db',
          cursor: 'pointer',
        }} onClick={() => scrollTo('hero')}>
          Akilesh<span style={{ color: '#1e3a8a' }}>.</span>
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-menu">
          {['Work', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#374151',
                cursor: 'pointer',
                padding: '8px 0',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#1a56db';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
              }}
            >
              {item}
            </button>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('contact')}
            style={{ padding: '10px 24px', fontSize: '0.9rem' }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#1a56db',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'white',
          padding: '20px 24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }} className="mobile-menu">
          {['Work', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#374151',
                cursor: 'pointer',
                padding: '12px 0',
                textAlign: 'left',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              {item}
            </button>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('contact')}
            style={{ width: '100%', marginTop: '16px' }}
          >
            Hire Me
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;