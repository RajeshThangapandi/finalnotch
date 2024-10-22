// VideoModal.js
import React from 'react';
import './Video.css'; // Create a CSS file for modal styling

const VideoModal = ({ isOpen, videoSrc, onClose }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <video className="modal-video" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
