import React from 'react';

const services = [
  {
    icon: '💼',
    title: 'Website for Business',
    description: 'Professional business websites tailored to showcase your brand, generate leads, and support growth. Includes clear service pages, contact & lead capture, and optional CMS for easy updates.',
    features: ['Homepage & About', 'Services / Product Pages', 'Contact & Lead Forms',],
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'All websites are fully responsive and optimized for mobile, tablet, and desktop devices, ensuring your customers have a seamless experience.',
    features: ['Mobile-First', 'Fast Loading', 'SEO Optimized', 'Cross-Browser'],
  },
  {
    icon: '⚡',
    title: 'Performance Optimized',
    description: 'Lightning-fast websites built with modern technologies that load quickly and keep your customers engaged.',
    features: ['Quick Loading', 'Optimized Images', 'Clean Code', 'Best Practices'],
  },
];

const Services = () => {
  return (
    <section id="services" style={{ background: '#f9fafb' }} className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">
            Specialized web development services for your business needs
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(26, 86, 219, 0.1)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '12px',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}>
                {service.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
              }}>
                {service.features.map((feature, idx) => (
                  <span key={idx} style={{
                    background: '#eff6ff',
                    color: '#1a56db',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;