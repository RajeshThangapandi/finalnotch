import React from 'react';
import "./openings.css"

// Sample data for job openings
const jobOpenings = [
  {
    id: 1,
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    description: 'Work on building and maintaining web applications using modern JavaScript frameworks.',
    applyLink: 'https://example.com/fullstack-developer',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    location: 'Remote',
    description: 'Design user interfaces and ensure a seamless user experience.',
    applyLink: 'https://example.com/ui-ux-designer',
  },
  {
    id: 3,
    title: 'Backend Developer',
    location: 'New York, NY',
    description: 'Develop and maintain backend services using Node.js and Express.',
    applyLink: 'https://example.com/backend-developer',
  },
];

const Openings = () => {
  return (
    <div className="openings-section">
      <h2>Current Openings</h2>
      <div className="openings-list">
        {jobOpenings.map((job) => (
          <div key={job.id} className="job-opening">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="apply-link">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;
