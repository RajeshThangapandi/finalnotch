import React, { useEffect } from 'react';
import logoimg from "../images/logotransparent.png";

const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    // Ensure the prop is a function
    if (typeof onLoadComplete !== 'function') {
      console.error('onLoadComplete is not a function');
      return;
    }

    const timer = setTimeout(() => {
      onLoadComplete(); // Call the function when loading is complete
    }, 2000); // Set the loading time (2 seconds in this case)

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div style={styles.loaderContainer}>
      {/* Logo Image */}
      <img 
        src={logoimg}
        alt="Logo"
        style={styles.logo}
      />

      {/* Circular Progress Bar */}
      <svg style={styles.progressCircle} viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="#e0e0e0" 
          strokeWidth="8"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="#00354f" 
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="283" // 2 * PI * R (where R is 45)
          strokeDashoffset="283"
          style={{
            animation: "progress 2s linear forwards"
          }}
        />
      </svg>

      <style>
        {`
          @keyframes progress {
            0% {
              stroke-dashoffset: 283;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

// Styles
const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
  },
  logo: {
    width: '100px', // Adjust width as needed
    position: 'absolute',
    // Adjust this value for vertical spacing
  },
  progressCircle: {
    width: '200px', // Size of the SVG
    height: '200px',
    transform: 'rotate(-90deg)', // Rotates the circle to start from the top
  },
};

export default Loader;
