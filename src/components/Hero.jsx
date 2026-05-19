import React, { useEffect, useState } from 'react';

const Hero = () => {

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0f9ff 100%)',
      paddingTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left Content */}
          <div>
            <div style={{
              display: 'inline-block',
              background: '#dbeafe',
              color: '#1e40af',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '24px',
            }}>
              Available for Freelance Projects
            </div>
            
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#111827',
              marginBottom: '20px',
              letterSpacing: '-0.025em',
            }}>
              Web Developer
            </h1>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#4b5563',
              marginBottom: '40px',
              lineHeight: 1.7,
              maxWidth: '500px',
            }}>
              I build professional, high-converting websites for restaurants and 
              hair salons that attract customers and grow your business.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#work" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
              }}>
                View My Work ↓
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>
                Start a Project
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '40px',
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: '1px solid #e5e7eb',
            }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a56db' }}>2+</div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a56db' }}>2</div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Industries Served</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a56db' }}>100%</div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Photo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #bfdbfe',
              boxShadow: '0 25px 50px -12px rgba(26, 86, 219, 0.25)',
              background: '#eff6ff',
            }}>
              <img
                src="/photo.jpg"
                alt="Akilesh - Web Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.display = 'flex';
                  e.target.parentElement.style.alignItems = 'center';
                  e.target.parentElement.style.justifyContent = 'center';
                  e.target.parentElement.innerHTML = '<span style="font-size: 4rem;">👨‍💻</span>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;