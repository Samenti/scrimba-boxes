import React from 'react';

export default function Box(props) {
  const [isOn, setIsOn] = React.useState(props.on);
  
  const styles = {
    backgroundColor: isOn ? '#222222' : 'transparent',
    borderRadius: '5px'
  };

  function handleClick() {
    setIsOn(prevState => !prevState);
  }

  return (
    <div onClick={handleClick} style={styles} className="box" />
  );
};