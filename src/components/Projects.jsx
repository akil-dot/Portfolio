import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Neon Restaurant Website',
    category: 'Restaurant',
    description: 'A full-featured restaurant website with online reservation system, digital menu display, special offers showcase, image gallery, and membership management. Built to convert visitors into diners.',
    features: ['Online Table Reservation', 'Digital Menu', 'Special Offers', 'Photo Gallery', 'Member Portal'],
    tech: ['React', 'Responsive Design', 'Modern UI/UX'],
    image: '/restaurant-preview.jpg',
    link: 'https://demo-restaurant-neon.vercel.app/',
    color: '#1a56db',
  },
  {
    id: 2,
    title: 'Luxe Hair Salon Website',
    category: 'Hair Salon',
    description: 'An elegant hair salon website featuring service pricing, stunning gallery, client testimonials, and easy contact information. Designed to showcase the salon\'s expertise and attract new clients.',
    features: ['Service Pricing', 'Portfolio Gallery', 'Client Testimonials', 'Contact & Location', 'Online Booking Ready'],
    tech: ['React', 'Responsive Design', 'Elegant UI'],
    image: '/salon-preview.jpg',
    link: 'https://demo-hair-salon-alpha.vercel.app/',
    color: '#1e3a8a',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" style={{ background: '#ffffff' }} className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Project Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }} className="project-tabs">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              style={{
                padding: '12px 28px',
                borderRadius: '8px',
                border: activeProject === index ? '2px solid #1a56db' : '2px solid #e5e7eb',
                background: activeProject === index ? '#eff6ff' : 'white',
                color: activeProject === index ? '#1a56db' : '#4b5563',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
              }}
              className="project-tab"
              onMouseEnter={(e) => {
                if (activeProject !== index) {
                  e.target.style.borderColor = '#93c5fd';
                }
              }}
              onMouseLeave={(e) => {
                if (activeProject !== index) {
                  e.target.style.borderColor = '#e5e7eb';
                }
              }}
            >
              {project.category}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          background: '#f9fafb',
          borderRadius: '20px',
          padding: '48px',
          border: '1px solid #e5e7eb',
        }} className="project-grid">
          {/* Image/Mockup */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} className="project-image-wrapper">
            <img
              src={projects[activeProject].category === 'Restaurant' ? '/restaurant.jpg' : '/salon.jpg'}
              alt={projects[activeProject].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="project-image"
            />
          </div>

          {/* Details */}
          <div className="project-details">
            <div style={{
              display: 'inline-block',
              background: '#dbeafe',
              color: '#1e40af',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}>
              {projects[activeProject].category}
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '16px',
            }} className="project-title">
              {projects[activeProject].title}
            </h3>
            
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              marginBottom: '24px',
              lineHeight: 1.7,
            }} className="project-description">
              {projects[activeProject].description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: '24px' }} className="features-section">
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Key Features
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                {projects[activeProject].features.map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'white',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    color: '#374151',
                    border: '1px solid #e5e7eb',
                  }}>
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '28px' }} className="tech-section">
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Tech Stack
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {projects[activeProject].tech.map((tech, idx) => (
                  <span key={idx} style={{
                    background: '#1a56db',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={projects[activeProject].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-btn"
            >
              Visit Website ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .project-grid {
            gap: 40px !important;
            padding: 32px !important;
          }
          .project-image-wrapper {
            min-height: 400px !important;
          }
          .project-title {
            font-size: 1.5rem !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .projects-header {
            margin-bottom: 40px !important;
          }
          
          .project-tabs {
            margin-bottom: 32px !important;
          }
          
          .project-tab {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
            flex: 1;
            min-width: 140px;
          }
          
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 24px !important;
          }
          
          .project-image-wrapper {
            min-height: 300px !important;
            order: -1;
          }
          
          .project-title {
            font-size: 1.4rem !important;
          }
          
          .project-description {
            font-size: 0.95rem !important;
          }
          
          .project-btn {
            width: 100%;
            text-align: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .projects-header {
            margin-bottom: 32px !important;
          }
          
          .project-tab {
            width: 100% !important;
            padding: 12px 16px !important;
            font-size: 0.85rem !important;
          }
          
          .project-grid {
            gap: 24px !important;
            padding: 16px !important;
            border-radius: 12px !important;
          }
          
          .project-image-wrapper {
            min-height: 220px !important;
            border-radius: 12px !important;
          }
          
          .project-title {
            font-size: 1.2rem !important;
          }
          
          .project-description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;