import React, { useState, useEffect, useRef } from 'react';
import ProfilePic from '../assets/profile.png';

// Add adjectives about yourself here!
const phrases = ["a Student", "a Developer", "a Designer", "a Researcher"];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null); 

  // Cycle through adjectives every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to About section
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page" style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Header */}
      <h1>
        Welcome to <span className="bouncy-name">[Your Name]</span>'s Website
      </h1>
      <h2>I am {phrases[current]}</h2>

      {/* Introduction Box */}
      <div
        className="info-box"
        style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '1rem 2rem',
          margin: '2rem auto',
          maxWidth: '450px',
          backgroundColor: '#8b0c0cff',
          color: 'white',
          lineHeight: '1.5'
        }}
      >
        {/* Concise introduction for students */}
        Current high school student studying computer science and exploring technology!
      </div>

      {/* Learn More Button */}
      <button
        className="learn-more-btn"
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '3rem'
        }}
        onClick={scrollToAbout}
      >
        Learn More
      </button>

      {/* About Me Section */}
      <div
        ref={aboutRef}
        className="about-section"
        style={{
          marginTop: '5rem',
          padding: '2rem',
          backgroundColor: '#6c0505ff',
          borderRadius: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '2rem',
          color: 'white',
          lineHeight: '1.6'
        }}
      >
        {/* Profile Image */}
        <img
          src={ProfilePic}
          alt="About me"
          style={{ width: '200px', borderRadius: '10px' }}
        />

        {/* Text Section */}
        <div style={{ maxWidth: '450px', textAlign: 'left' }}>
          <p>
            Hi! I’m a high school student passionate about coding, digital design, and exploring new technologies.
            I love building projects that solve real problems, showcase creativity, and promote inclusivity.
          </p>
          <p>
            <strong>Note:</strong> This website is currently under construction! 
            It was created as a template for students I mentor in the Women in Computer Science club,
            providing them with a starting point to build their own e-portfolios. 
            I plan to continue improving this site to add more features and personal flair,
            while also using it as the foundation for my own portfolio.
          </p>
          <p>
            For now, please enjoy exploring the template!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
