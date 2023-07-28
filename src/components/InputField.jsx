import {useState} from 'react';
import "../styles/Section.css";

const InputField = ({ placeholder, onChange, onFocusChange }) => {
  const [isFocused, setFocus] = useState(false);
  const handleFocusChange = (focused) => {
    setFocus(focused);
    onFocusChange(focused);
  }
  return (
    <div className="field">
      <input type="text" placeholder={placeholder} onChange={onChange} onFocus={() => {
      handleFocusChange(true)
    }
    } onBlur={() => {
      handleFocusChange(false)
    }} /></div>
  )
};

export default InputField;