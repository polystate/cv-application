import React from 'react';
import "../styles/Section.css";

function ProgressBar({ Progress }) {
  return (
    // <div className="progress-container">
      <div className="progress-bar" style={{ width: `${Progress}%` }}>
      </div>
    // </div>
  );
};


export default ProgressBar;