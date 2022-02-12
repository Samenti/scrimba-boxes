import React from 'react';
import boxes from './boxes.json';
import Box from './components/Box';

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxes);

  function toggle(event) {
    setBoxArray(prevBoxArray => {
      const newArray = [...prevBoxArray];
      const index = newArray.findIndex(
        element => element.id == event.target.id
      );
      newArray[index].on = !newArray[index].on;
      return (newArray);
    });
  }

  const boxElements = boxArray.map(box => {
    return (
      <Box 
        key={box.id}
        id={box.id}
        on={box.on}
        toggle={toggle}
      />
     );
  });

  return (
    <div className="container">
      {boxElements}
    </div>
  );
};