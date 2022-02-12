import React from 'react';

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#222222' : 'none',
    borderRadius: '5px'
  };
  return (
    <div style={styles} className="box" />
  );
};