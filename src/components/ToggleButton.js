import React from 'react';
import { localizationConsumer } from './localizationContext';

const ToggleButton = ({ func, isOpen, label, translate }) => (
  <button onClick={func}>
    {isOpen ? `${translate.close} ${label}` : `${translate.open} ${label}`}
  </button>
);

export default localizationConsumer(ToggleButton);
