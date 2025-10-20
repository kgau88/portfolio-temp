import React from 'react';

const experiences = [
  {
    title: "Experience #1",
    description: "Include your role, key responsibilities, measurable outcomes, and impact.",
    details: [
      "Role: [Your Job Title]",
      "Key Responsibilities: [Briefly describe your main duties]",
      "Metrics: [Provide measurable results, such as percentages or numbers]",
      "Impact: [Explain how your work contributed to success]"
    ]
  },
  {
    title: "Experience #2",
    description: "Brief description of the role, responsibilities, and achievements.",
    details: [
      "Role: [Your Job Title]",
      "Key Responsibilities: [Briefly describe your main duties]",
      "Metrics: [Provide measurable results, such as percentages or numbers]",
      "Impact: [Explain how your work contributed to success]"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section
      className="page experience-page"
      style={{
        padding: '3rem 2rem',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <h1 style={{ textAlign: 'center', color: '#860d0d', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Experience
      </h1>

      {/* Experience Grid */}
      <div
        className="experience-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
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
            <h2 style={{ color: '#860d0d', marginBottom: '0.5rem' }}>{exp.title}</h2>
            <p style={{ color: '#333', marginBottom: '1rem' }}>{exp.description}</p>
            <ul style={{ color: '#333', paddingLeft: '1.2rem' }}>
              {exp.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
