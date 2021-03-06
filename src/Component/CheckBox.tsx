import React, {useState} from 'react';

const CheckboxWithLabel = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? "labelOn" : "labelOff"}
    </label>
  );
};

export default CheckboxWithLabel;