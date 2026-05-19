import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(251, 146, 60, 0.14), transparent 24%), linear-gradient(135deg, #0f2f7a 0%, #1d4ed8 52%, #0b1f4d 100%)',
      color: 'white',
    }} className="section">
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.18,
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        filter: 'blur(2px)',
        animation: 'floatAccent 7s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        right: '-60px',
        bottom: '-70px',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: 'rgba(251, 191, 36, 0.12)',
        filter: 'blur(4px)',
        animation: 'floatAccent 9s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />
      <div className="container">
        <div style={{
          minHeight: '460px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '760px',
            width: '100%',
            padding: '12px 0',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.12)',
              color: '#eff6ff',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              marginBottom: '20px',
            }}>
              READY TO START
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '18px',
              color: 'white',
            }}>
              Let's Work Together
            </h2>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#dbeafe',
              margin: '0 auto 28px',
              maxWidth: '640px',
            }}>
              Ready to get a professional website for your business Let's discuss your project and create something amazing.
            </p>

            <div style={{
              width: '92px',
              height: '4px',
              borderRadius: '999px',
              margin: '0 auto 28px',
              background: 'linear-gradient(90deg, #f59e0b 0%, #f97316 50%, #fb7185 100%)',
              boxShadow: '0 0 18px rgba(249, 115, 22, 0.4)',
            }} />

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwwPWbpkP4HPe-VSGbSPXtlZnoBwlpHh5RT9NtDrrAHUebTQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                minWidth: '240px',
                minHeight: '56px',
                padding: '0 28px',
                fontSize: '1rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #fb7185 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 14px 28px rgba(249, 115, 22, 0.35)',
                textDecoration: 'none',
              }}
            >
              Book a Call
              <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatAccent {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, 18px, 0) scale(1.04); }
        }
      `}</style>
    </section>
  );
};

export default Contact;