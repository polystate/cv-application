import React from 'react';
import "../styles/Section.css";

const ButtonContainer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //Form submission logic goes here
  }
  const handleEdit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="btn-container">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleEdit}>Edit</button>
    </div>
  )
};

export default ButtonContainer;