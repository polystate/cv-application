import React from 'react';
import "../styles/Section.css";

const InputField = ({ placeholder, onChange }) => {
  return (
    <div className="field"><input type="text" placeholder={placeholder} onChange={onChange} /></div>
  )
};

export default InputField;