import React from 'react';

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
          <div className="hero-content">
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
            }} className="hero-title">
              Web Developer
            </h1>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#4b5563',
              marginBottom: '40px',
              lineHeight: 1.7,
              maxWidth: '500px',
            }} className="hero-description">
              I build professional, high-converting websites for restaurants and 
              hair salons that attract customers and grow your business.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="hero-buttons">
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
            }} className="hero-stats">
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
          }} className="hero-image-wrapper">
            <div style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #bfdbfe',
              boxShadow: '0 25px 50px -12px rgba(26, 86, 219, 0.25)',
              background: '#eff6ff',
            }} className="hero-image-container">
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

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem !important;
          }
          .hero-image-container {
            width: 300px !important;
            height: 300px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          #hero {
            min-height: auto !important;
            padding: 120px 0 60px !important;
          }
          
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-title {
            font-size: 2.2rem !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .hero-stats {
            justify-content: center !important;
            gap: 24px !important;
            margin-top: 40px !important;
            padding-top: 30px !important;
          }
          
          .hero-image-wrapper {
            order: -1 !important;
          }
          
          .hero-image-container {
            width: 200px !important;
            height: 200px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          #hero {
            padding: 100px 0 40px !important;
          }
          
          .hero-title {
            font-size: 1.8rem !important;
          }
          
          .hero-description {
            font-size: 0.95rem !important;
          }
          
          .hero-stats {
            gap: 16px !important;
            flex-wrap: wrap !important;
          }
          
          .hero-image-container {
            width: 160px !important;
            height: 160px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .hero-buttons .btn {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;