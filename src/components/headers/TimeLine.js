import React from 'react';
import "./TimeLine.css";



const TestingCard = () => {
  const imageStyle = {
    width: '60%', // Adjust the width as needed
    height: 'auto',
    objectFit: 'cover',
    margin: '0 auto', // Center the image horizontally
  };
  return (
    <section className="establishments-section establishments-section-desktop">
      <div className="establishments-container">
        <div className="establish-projects-heading">
          <h1>Construction Equipment</h1>
        </div>
        <div className="establish-projects-flex">
          <div className="establish-projects active" data-bg="https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Excavator</p>
              </div>
              <img style={imageStyle} className="bg-project" src="https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Excavator" />
            </div>
            <img  style={imageStyle} src="https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Excavator" />
          </div>
          <div className="establish-projects" data-bg="https://images.unsplash.com/photo-1728435195819-3083655add92?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Bulldozer</p>
              </div>
              <img className="bg-project" src="https://images.unsplash.com/photo-1728435195819-3083655add92?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bulldozer" />
            </div>
            <img style={imageStyle} src="https://images.unsplash.com/photo-1728435195819-3083655add92?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bulldozer" />
          </div>
          <div className="establish-projects" data-bg="https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Crane</p>
              </div>
              <img className="bg-project" src="https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Crane" />
            </div>
            <img style={imageStyle} src="https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Crane" />
          </div>
          <div className="establish-projects" data-bg="https://images.unsplash.com/photo-1718470822407-f347f8a17798?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Forklift</p>
              </div>
              <img className="bg-project" src="https://images.unsplash.com/photo-1718470822407-f347f8a17798?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Forklift" />
            </div>
            <img style={imageStyle} src="https://images.unsplash.com/photo-1718470822407-f347f8a17798?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Forklift" />
          </div>
          <div className="establish-projects" data-bg="https://images.unsplash.com/photo-1690719744562-249937b9c03a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Concrete Mixer</p>
              </div>
              <img className="bg-project" src="https://images.unsplash.com/photo-1690719744562-249937b9c03a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Concrete Mixer" />
            </div>
            <img style={imageStyle} src="https://images.unsplash.com/photo-1690719744562-249937b9c03a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Concrete Mixer" />
          </div>
          <div className="establish-projects" data-bg="https://plus.unsplash.com/premium_photo-1677682546110-2880cad3cb43?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Paver</p>
              </div>
              <img className="bg-project" src="https://plus.unsplash.com/premium_photo-1677682546110-2880cad3cb43?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paver" />
            </div>
            <img style={imageStyle} src="https://plus.unsplash.com/premium_photo-1677682546110-2880cad3cb43?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paver" />
          </div>
          <div className="establish-projects last-child" data-bg="https://images.unsplash.com/photo-1646427154221-a4b57a921906?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Backhoe Loader</p>
              </div>
              <img className="bg-project" src="https://images.unsplash.com/photo-1646427154221-a4b57a921906?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Backhoe Loader" />
            </div>
            <img  style={imageStyle} src="https://images.unsplash.com/photo-1646427154221-a4b57a921906?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Backhoe Loader" />
          </div>
          <div className="establish-projects last-child" data-bg="https://images.unsplash.com/photo-1640723559855-c27b649ad231?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div className="establish-project">
              <div>
                <p>Road Roller</p>
              </div>
              <img className="bg-project" src="https://images.unsplash.com/photo-1640723559855-c27b649ad231?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Road Roller" />
            </div>
            <img style={imageStyle} src="https://images.unsplash.com/photo-1640723559855-c27b649ad231?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Road Roller" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingCard;
