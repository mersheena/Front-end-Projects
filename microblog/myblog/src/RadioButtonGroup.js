import React, { useState } from 'react';
function RadioButtonGroup() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div  className='radio'>
        <h4>Suggest Anyone....</h4>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          Good
        </label>
       
      
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          OK
        </label>
        
        
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          Worst
        </label>
      </div>
    );
  }
  
  export default RadioButtonGroup;
  