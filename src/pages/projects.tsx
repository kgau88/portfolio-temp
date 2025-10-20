import React from 'react';

// Placeholder data for projects
const projects = [
  {
    name: "Project Name #1",
    description: "Brief description of Project #1 goes here.",
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Project Name #2",
    description: "Brief description of Project #2 goes here.",
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Project Name #3",
    description: "Brief description of Project #3 goes here.",
    image: "https://via.placeholder.com/300x200"
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section
      className="page projects-page"
      style={{
        padding: '3rem 2rem',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#860d0d', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Projects
        </h1>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#d60000',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ff4d4d')}
          onMouseLeave={e => (e.currentTarget.style.color = '#d60000')}
        >
          View on GitHub
        </a>
      </div>

      {/* Projects Grid */}
      <div
        className="projects-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              const card = e.currentTarget;
              card.style.transform = 'translateY(-5px)';
              card.style.boxShadow = '0 8px 12px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = 'translateY(0)';
              card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                borderRadius: '10px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: '#860d0d', marginBottom: '0.5rem' }}>{project.name}</h3>
            <p style={{ color: '#333' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
