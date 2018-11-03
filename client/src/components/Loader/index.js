import React from 'react';
import './styles.css';

export const Loader = ({ size }) => {
  const fontSize = size === 'large' ? '48px' : '36px';
  return (
    <div className="Loader" style={{ fontSize, lineHeight: fontSize }}>
      {'🌀'}
    </div>
  );
};
