import React from 'react';
import './style.css';

function FormField({formType, label, type, name, value, onChange}) {
    if (formType === "input") {
      return (
        <div>
            <label>
              {label}: 
              <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            </label>
        </div>
        
    );
  } else if (formType === "textarea") {
    return (
      <div>
          <label>
            {label}: 
            <textarea 
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
      </div>
    );
  }

}

export default FormField;