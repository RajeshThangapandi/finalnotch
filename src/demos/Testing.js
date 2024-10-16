import React from 'react'
import "./Testing.css"
const TestingCard = () => {
  return (
    <section className="establishments-section establishments-section-desktop">
      <div className="establishments-container">
        <div className="establish-projects-heading">
          <h1>Our Journey</h1>
          <p>Year</p>
        </div>
        <div className="establish-projects-flex">
          <div className="establish-projects active" data-bg="https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D">
            <div className="establish-project">
              <div>
                <p>Manufacturing in Saudi Arabia</p>
              </div>
              <div>
                <p>2024</p>
              </div>
              <img className="bg-project" src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
            </div>
            <img src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects" data-bg="assets/images/home/2017.webp">
            <div className="establish-project">
              <div>
                <p>First Project in Mauritius</p>
              </div>
              <div>
                <p>2017</p>
              </div>
              <img className="bg-project" src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
            </div>
            <img src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects" data-bg="assets/images/home/2012.webp">
            <div className="establish-project">
              <div>
                <p>Renacon AAC Block's 1st factory at Arcot</p>
              </div>
              <div>
                <p>2012</p>
              </div>
              <img className="bg-project" src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
            </div>
            <img src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects" data-bg="assets/images/home/2011.webp">
            <div className="establish-project">
              <div>
                <p>First Project in Maldives</p>
              </div>
              <div>
                <p>2011</p>
              </div>
              <img className="bg-project" src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
            </div>
            <img src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects" data-bg="assets/images/home/2008.webp">
            <div className="establish-project">
              <div>
                <p>RPP Ready Mix</p>
              </div>
              <div>
                <p>2008</p>
              </div>
              <img className="bg-project" src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
            </div>
            <img src="https://renaatus.com/assets/images/home/2017.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects" data-bg="assets/images/home/2006.webp">
            <div className="establish-project">
              <div>
                <p>Renaatus Projects Pvt Ltd</p>
              </div>
              <div>
                <p>2006</p>
              </div>
              <img className="bg-project" src="assets/images/home/2006.webp" alt="renaatus journey images" />
            </div>
            <img src="assets/images/home/2006.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects last-child" data-bg="assets/images/home/rpp_construction.webp">
            <div className="establish-project">
              <div>
                <p>RPP Construction</p>
              </div>
              <div>
                <p>1988</p>
              </div>
              <img className="bg-project" src="assets/images/home/rpp_construction.webp" alt="renaatus journey images" />
            </div>
            <img src="assets/images/home/rpp_construction.webp" alt="renaatus journey images" />
          </div>
          <div className="establish-projects last-child" data-bg="assets/images/home/1970.webp">
            <div className="establish-project">
              <div>
                <p>RPP Blue Metal</p>
              </div>
              <div>
                <p>1970</p>
              </div>
              <img className="bg-project" src="assets/images/home/1970.webp" alt="renaatus journey images" />
            </div>
            <img src="assets/images/home/1970.webp" alt="renaatus journey images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingCard;
