import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hero images and text
const heroImages = [
  {
    img: 'https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727827200&semt=ais_hybrid',
    text: 'Building Dreams'
  },
  {
    img: 'https://img.freepik.com/free-photo/illustration-construction-site_23-2151850239.jpg?t=st=1727969737~exp=1727973337~hmac=170e1200b517d07ab7aded3f6ce864b65d0ba2d35bce7ac901b9a4764044baf5&w=2000',
    text: 'Construction Innovation'
  },
  {
    img: 'https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg?w=1800&t=st=1727969760~exp=1727970360~hmac=e99c47accb6e3fcbc95cb7f86a46858e0f73b3dc46fef9fac680ac4146280d03',
    text: 'Home Under Construction'
  }
];

const HeroSection = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change every 3 seconds
    arrows: true, // Enable left and right arrows
    fade: false, // Disable fade for standard slide transitions
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {heroImages.map((item, index) => (
          <div key={index} className="hero-slide">
            <img src={item.img} alt={`Hero Slide ${index}`} className="hero-image" />
            <div className="hero-text">{item.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
