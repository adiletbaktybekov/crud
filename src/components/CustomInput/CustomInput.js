import React from 'react';
import './CustomInput.css';

const CustomInput = ({
   placeholder,
   handleChange,
   value,
   fieldName
}) => {
   return (
      <input
         placeholder={placeholder}
         onChange={(e) => handleChange(e, fieldName)}
         value={value}
         style={{margin:"10px 0"}}
      />
   )
}

export default CustomInput;