import React, { useState } from 'react';

const Tag = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    //Firebase stuff
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{name}</label>
    </div>
  );
};

export default Tag;