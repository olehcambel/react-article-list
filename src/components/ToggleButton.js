import React from 'react';

const ToggleButton = ({func, isOpen, label}) => (
  <button onClick={func}>
  {isOpen ? `close ${label}` : `show ${label}`}
</button>
)

export default ToggleButton
