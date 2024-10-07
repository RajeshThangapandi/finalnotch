import React, { useState, useEffect } from 'react';
import styles from "./Founder.css"; // Assuming the CSS file is configured correctly

const founderMessages = [
  {
    title: "Founder's Thoughts",
    message: `
      From Our Founder
      As we celebrate our achievements, we are filled with optimism about our future prospects.
    `,
    name: "A.D. Meenaachi Sundram",
    position: "FOUNDER AND MANAGING PARTNER",
    image: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
  },
  {
    title: "Manager's Vision",
    message: `
      Our journey is one of constant innovation and adaptation to the evolving business environment. We continue to inspire new generations.
    `,
    name: "M. Vetrivel Rajan",
    position: "MANAGING PARTNER",
    image: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
  },
  {
    title: "Partner's Mission",
    message: `
      We are driven by the desire to create sustainable solutions that enhance the quality of life globally. Our mission stands strong as we expand internationally.
    `,
    name: "B.Murugeshwari",
    position: "PARTNER",
    image: "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
  }
];

const FounderVisionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founderMessages.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalDuration = currentIndex === 0 ? 4000 : 2000; // 4 seconds for the first image, 2 seconds for others
    const interval = setInterval(() => {
      handleNext();
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex]); // Include currentIndex in the dependency array to reset the interval

  const currentMessage = founderMessages[currentIndex];

  return (
    <section className="founder-vision-section">
      <div className="founder-container">
        <div className="custom-container">
          <div className="custom-container2">
            <div className="founder-content">
              <h2 className="title">{currentMessage.title}</h2>
              <div className="founder-notes">
                <p>{currentMessage.message}</p>
                <div>
                  <b>{currentMessage.name}</b>
                  <p>{currentMessage.position}</p>
                </div>
              </div>
            </div>
            <div className="founder-img">
              <img
                src={currentMessage.image}
                alt={`${currentMessage.name}'s Image`}
                className="founder-avatar"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="dot-container">
        {founderMessages.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FounderVisionSection;
