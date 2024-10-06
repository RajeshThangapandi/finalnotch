import React from 'react';
import styles from "./Founder.css"; // Corrected import for styles
import user from "../../images/usertest.webp"; // This import seems unused; you can remove it if not needed.

const FounderVisionSection = () => {
  return (
    <section className="founder-vision-section">
      <div className="founder-container">
        <div className="custom-container">
          <div className="custom-container2">
            <div className="founder-content">
              <h2 className='title'>Founder's Thoughts</h2>
              <div className="founder-notes">
                <p>
                From Our Founder
As we celebrate our achievements, we are filled with optimism about our future prospects. 
Chairman.
                </p>
                <p>
                The dynamic growth of the Indian economy in tandem with global trends presents us with unparalleled opportunities for expansion. Our steadfast commitment to excellence and innovation empowers us to embrace this new chapter, allowing us to establish a significant presence on the international stage.

Let us unite in this endeavor to carry our vision and values to new frontiers.


                </p>
                <div>
                  <b>A.D. Meenaachi Sundram</b>
                  <p>Chairman</p>
                </div>
              </div>
            </div>
            <div className="founder-img">
              <img 
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" 
                alt="Transparent Image" 
                className="founder-avatar" // Add a class for styling
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVisionSection;
