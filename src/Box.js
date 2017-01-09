import React from 'react';
import './box.css';

export default props => {
  const str = `rgba(${props.colors.r},${props.colors.g},${props.colors.b},${props.colors.a})`;
  return <div style={{backgroundColor: str}} className="box"></div>
};
