import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeLine.css';
import rmcvideo from "../../images/rmc.mp4";
import crushervideo from "../../images/crusher.mp4";

const TestingCard = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate();

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 2,
    opacity: 0,
    transform: 'translateX(-50px)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
  };

  const videoStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '15px',
    objectFit: 'cover',
  };

  const svgBackgroundStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
    animation: 'moveBg 15s infinite linear',
    opacity: 0.3,
  };

  const projects = [
    {
      name: 'RMC plant',
      type: 'video',
      videoSrc: rmcvideo,
    },
    {
      name: 'Crusher',
      type: 'video',
      videoSrc: crushervideo,
    },
    {
      name: 'Crane',
      type: 'image',
      image: 'https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Forklift',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1718470822407-f347f8a17798?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // ... other projects
  ];

  useEffect(() => {
    const timeoutIds = projects.map((_, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 300)
    );

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="equipment-list-vertical" style={{ position: 'relative', padding: '50px', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <svg
        style={svgBackgroundStyle}
        viewBox="0 0 1200 2000"
        preserveAspectRatio="none" // This makes sure it fills the whole screen
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <circle
            key={index}
            cx={Math.random() * 1200}
            cy={Math.random() * 2000}
            r={Math.random() * 50 + 20}
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
          />
        ))}
      </svg>

      <h1 style={{ textAlign: 'center', color: '#222', marginBottom: '40px', zIndex: 2 }}>Our Equipment</h1>

      <button
        onClick={handleBackClick}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        Back
      </button>

      <div className="vertical-list" style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              marginBottom: '20px',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <div
              className="card"
              style={{
                ...cardStyle,
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index)
                  ? (index % 2 === 0 ? 'translateX(0)' : 'translateX(50px)')
                  : (index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'),
              }}
            >
              {project.type === 'video' ? (
                <video
                  src={project.videoSrc}
                  style={videoStyle}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={project.image} alt={project.name} style={videoStyle} />
              )}
              <h2>{project.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestingCard;
