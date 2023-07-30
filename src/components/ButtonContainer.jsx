import React from 'react';
import "../styles/Section.css";

const ButtonContainer = ({ handleSubmit, handleEdit }) => {
  
  return (
    <div className="btn-container">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleEdit}>Edit</button>
    </div>
  )
};

export default ButtonContainer;