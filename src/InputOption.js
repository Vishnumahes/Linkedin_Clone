import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      {Icon && <Icon className="inputOption__icon" style={{ color: color }} />}
      <h4 className="inputOption__title">{title}</h4>
    </div>
  );
}

export default InputOption;