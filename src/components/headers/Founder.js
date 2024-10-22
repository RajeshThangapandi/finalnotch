import React from 'react';
import './Founder.css';
import img1 from "../../images/user.png"
import img2 from "../../images/user2.png"
import img3 from "../../images/user.png"
const founderMessages = [
    {
        title: "Founder's Thoughts",
        message: `
            From Our Founder
            As we celebrate our achievements, we are filled with optimism about our future prospects.
        `,
        name: "A.D. Meenaachi Sundram",
        position: "FOUNDER AND MANAGING PARTNER",
        image: img1,
    },
    {
        title: "Manager's Vision",
        message: `
            Our journey is one of constant innovation and adaptation to the evolving business environment. We continue to inspire new generations.
        `,
        name: "M. Vetrivel Rajan",
        position: "MANAGING PARTNER",
        image: img2,
    },
    {
        title: "Partner's Mission",
        message: `
            We are driven by the desire to create sustainable solutions that enhance the quality of life globally. Our mission stands strong as we expand internationally.
        `,
        name: "B.Murugeshwari",
        position: "PARTNER",
        image: img3,
    }
];

const AnimatedFlexCards = () => {
    return (
        <div className="wrapper">
            <div className="container">
                {founderMessages.map((founder, index) => (
                    <React.Fragment key={index}>
                        <input type="radio" name="slide" id={`c${index + 1}`} defaultChecked={index === 0} />
                        <label htmlFor={`c${index + 1}`} className="card">
                            <div className="row">
                                <img src={founder.image} alt={founder.name} className="card-image" />
                                <div className="overlay">
                                    <h2 className="card-title">{founder.title}</h2>
                                    <p>{founder.message}</p>
                                    <h3>{founder.name}</h3>
                                    <h4>{founder.position}</h4>
                                </div>
                            </div>
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AnimatedFlexCards;
